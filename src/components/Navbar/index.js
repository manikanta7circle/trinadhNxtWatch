import {withRouter, Link} from 'react-router-dom'

import {HiOutlineLightBulb} from 'react-icons/hi'
import {FaMoon} from 'react-icons/fa'

import ThemeContext from '../../context/ThemeContext'
import ReactPopup from '../ReactPopup'
import ReactPopUpMobile from '../ReactPopUpMobile'
import {
  NavMainContainer,
  NavImage,
  NavRightContainer,
  ThemeChangeButton,
  UserImage,
} from './styledComponents'

import './index.css'

const NavbarLightLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const NavbarDarkLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickThemeChange = () => toggleTheme()
      return (
        <NavMainContainer isDarkTheme={isDarkTheme}>
          <Link to="/" style={{textDecoration: 'none'}}>
            <NavImage
              src={isDarkTheme ? NavbarDarkLogo : NavbarLightLogo}
              alt="website logo"
            />
          </Link>
          <NavRightContainer>
            <ThemeChangeButton
              data-testid="theme"
              type="button"
              onClick={onClickThemeChange}
            >
              {isDarkTheme ? (
                <HiOutlineLightBulb className="theme" color="white" />
              ) : (
                <FaMoon className="theme" />
              )}
            </ThemeChangeButton>
            <UserImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <ReactPopUpMobile />
            <ReactPopup />
          </NavRightContainer>
        </NavMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Navbar)
