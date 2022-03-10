import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'
import {
  SidebarContainer,
  NavLinksContainer,
  NavLink,
  SidebarBottomContainer,
  ContactUsHeading,
  IconsContainer,
  IconImage,
  Message,
} from './styledComponents'

const Sidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SidebarContainer isDarkTheme={isDarkTheme}>
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
                <SiYoutubegaming style={{margin: '15px', marginLeft: '0px'}} />
                Gaming
              </NavLink>
            </Link>
            <Link to="/saved-videos" style={{textDecoration: 'none'}}>
              <NavLink isDarkTheme={isDarkTheme}>
                <MdPlaylistAdd style={{margin: '15px', marginLeft: '0px'}} />
                Saved videos
              </NavLink>
            </Link>
          </NavLinksContainer>
          <SidebarBottomContainer>
            <ContactUsHeading isDarkTheme={isDarkTheme}>
              CONTACT US
            </ContactUsHeading>
            <IconsContainer>
              <IconImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <IconImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <IconImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconsContainer>
            <Message isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </Message>
          </SidebarBottomContainer>
        </SidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Sidebar
