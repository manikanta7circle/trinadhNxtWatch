import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import {
  HomeMainContainer,
  HomeContentContainer,
  ContentContainer,
  HomeFailureViewContainer,
  HomeFailureImage,
  HomeFailureMessage,
  HomeFailureMessageDescription,
} from '../Home/styledComponents'

const NotFoundDarkImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
const NotFoundLightImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <HomeMainContainer>
          <Navbar />
          <HomeContentContainer>
            <Sidebar />
            <ContentContainer isDarkTheme={isDarkTheme}>
              <HomeFailureViewContainer>
                <HomeFailureImage
                  src={isDarkTheme ? NotFoundDarkImage : NotFoundLightImage}
                  alt="not found"
                />
                <HomeFailureMessage isDarkTheme={isDarkTheme}>
                  Page Not Found
                </HomeFailureMessage>
                <HomeFailureMessageDescription isDarkTheme={isDarkTheme}>
                  we are sorry, the page you requested could not be found.
                </HomeFailureMessageDescription>
              </HomeFailureViewContainer>
            </ContentContainer>
          </HomeContentContainer>
        </HomeMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
