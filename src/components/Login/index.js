import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginPageMainContainer,
  LoginFormContainer,
  LoginPageLogo,
  LoginFrom,
  LoginFormField,
  LoginButton,
  TextInputLabel,
  TextInput,
  CheckboxInput,
  CheckboxLabel,
  ShowPasswordContainer,
  ErrorMsg,
} from './styledComponents'

const WebsiteLogoLightImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const WebsiteLogoDarkImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onChangeShowPasswordCheckbox = event => {
    this.setState({showPassword: event.target.checked})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickGuestLogin = () => {
    this.setState(
      {username: 'rahul', password: 'rahul@2021'},
      this.onClickLogin,
    )
  }

  onClickLogin = async event => {
    if (event !== undefined) {
      event.preventDefault()
    }

    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <TextInputLabel htmlFor="username" isDarkTheme={isDarkTheme}>
                USERNAME
              </TextInputLabel>
              <TextInput
                value={username}
                type="text"
                id="username"
                placeholder="Username"
                onChange={this.onChangeUsername}
                isDarkTheme={isDarkTheme}
              />
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <TextInputLabel htmlFor="password" isDarkTheme={isDarkTheme}>
                PASSWORD
              </TextInputLabel>
              <TextInput
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                id="password"
                value={password}
                onChange={this.onChangePassword}
                isDarkTheme={isDarkTheme}
              />
              <ShowPasswordContainer>
                <CheckboxInput
                  type="checkbox"
                  id="show"
                  onClick={this.onChangeShowPasswordCheckbox}
                />
                <CheckboxLabel htmlFor="show" isDarkTheme={isDarkTheme}>
                  Show Password
                </CheckboxLabel>
              </ShowPasswordContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  render() {
    const {showError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <LoginPageMainContainer isDarkTheme={isDarkTheme}>
              <LoginFormContainer isDarkTheme={isDarkTheme}>
                <LoginPageLogo
                  src={
                    isDarkTheme ? WebsiteLogoDarkImage : WebsiteLogoLightImage
                  }
                  alt="website logo"
                />
                <LoginFrom onSubmit={this.onClickLogin}>
                  <LoginFormField>{this.renderUsernameField()}</LoginFormField>
                  <LoginFormField>{this.renderPasswordField()}</LoginFormField>
                  <LoginButton type="submit">Login</LoginButton>
                  <LoginButton type="button" onClick={this.onClickGuestLogin}>
                    Guest Login
                  </LoginButton>
                </LoginFrom>
                <ErrorMsg>{showError ? errorMsg : null}</ErrorMsg>
              </LoginFormContainer>
            </LoginPageMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
