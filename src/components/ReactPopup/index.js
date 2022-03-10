import Popup from 'reactjs-popup'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

import {
  LogoutButton,
  Request,
  CancelButton,
  ConfirmButton,
  LogoutMainContainer,
} from './styledComponents'

const ReactPopup = props => {
  const onClickConfirm = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <div className="popup-container">
            <Popup
              modal
              trigger={<LogoutButton type="button">Logout</LogoutButton>}
            >
              {close => (
                <LogoutMainContainer isDarkTheme={isDarkTheme}>
                  <Request isDarkTheme={isDarkTheme}>
                    Are you sure, you want to logout
                  </Request>
                  <CancelButton
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    Cancel
                  </CancelButton>
                  <ConfirmButton onClick={onClickConfirm}>
                    Confirm
                  </ConfirmButton>
                </LogoutMainContainer>
              )}
            </Popup>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(ReactPopup)
