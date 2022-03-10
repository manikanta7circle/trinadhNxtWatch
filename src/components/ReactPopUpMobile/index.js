import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle, AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'

import {
  MenuButton,
  MobileMainContainer,
  ReactMobile,
  CancelButtonMobile,
} from './styledComponents'
import {NavLinksContainer, NavLink} from '../Sidebar/styledComponents'

const ReactPopUpMobile = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <ReactMobile>
          <Popup
            modal
            trigger={
              <MenuButton type="button">
                {isDarkTheme ? (
                  <GiHamburgerMenu className="theme" color="white" size={20} />
                ) : (
                  <GiHamburgerMenu className="theme" color="black" size={20} />
                )}
              </MenuButton>
            }
          >
            {close => (
              <MobileMainContainer isDarkTheme={isDarkTheme}>
                <CancelButtonMobile
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <AiFillCloseCircle size={20} />
                </CancelButtonMobile>
                <NavLinksContainer>
                  <Link to="/" style={{textDecoration: 'none'}}>
                    <NavLink isDarkTheme={isDarkTheme}>
                      <AiFillHome style={{margin: '15px', marginLeft: '0px'}} />
                      Home
                    </NavLink>
                  </Link>
                  <Link to="/trending" style={{textDecoration: 'none'}}>
                    <NavLink isDarkTheme={isDarkTheme}>
                      <HiFire style={{margin: '15px', marginLeft: '0px'}} />
                      Trending
                    </NavLink>
                  </Link>
                  <Link to="/gaming" style={{textDecoration: 'none'}}>
                    <NavLink isDarkTheme={isDarkTheme}>
                      <SiYoutubegaming
                        style={{margin: '15px', marginLeft: '0px'}}
                      />
                      Gaming
                    </NavLink>
                  </Link>
                  <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                    <NavLink isDarkTheme={isDarkTheme}>
                      <MdPlaylistAdd
                        style={{margin: '15px', marginLeft: '0px'}}
                      />
                      Saved videos
                    </NavLink>
                  </Link>
                </NavLinksContainer>
              </MobileMainContainer>
            )}
          </Popup>
        </ReactMobile>
      )
    }}
  </ThemeContext.Consumer>
)
export default withRouter(ReactPopUpMobile)
