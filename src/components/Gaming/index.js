import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import GamingVideoCard from '../GamingVideoCard'

import {
  HomeMainContainer,
  HomeContentContainer,
  ContentContainer,
  HomeLoadingContainer,
  HomeFailureViewContainer,
  HomeFailureImage,
  HomeFailureMessage,
  HomeFailureMessageDescription,
  HomeFailureRetryButton,
} from '../Home/styledComponents'

import {
  TrendingTopContainer,
  TrendingIconContainer,
  TrendingTopContainerHeading,
  TrendingPageMainContainer,
} from '../Trending/styledComponents'

import {GamingVideosListContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const HomeFailureLightImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const HomeFailureDarkImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

class Gaming extends Component {
  state = {gamingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideosList()
  }

  onClickRetry = () => {
    this.getGamingVideosList()
  }

  getGamingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGaming = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideosList()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  renderLoadingView = () => (
    <HomeLoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </HomeLoadingContainer>
  )

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <HomeFailureViewContainer>
            <HomeFailureImage
              src={isDarkTheme ? HomeFailureDarkImage : HomeFailureLightImage}
              alt="failure view"
            />
            <HomeFailureMessage isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </HomeFailureMessage>
            <HomeFailureMessageDescription isDarkTheme={isDarkTheme}>
              We are having some trouble to complete your request.
              <br />
              Please try again.
            </HomeFailureMessageDescription>
            <HomeFailureRetryButton onClick={this.onClickRetry}>
              Retry
            </HomeFailureRetryButton>
          </HomeFailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderGamingVideosList = () => {
    const {gamingVideosList} = this.state
    return (
      <GamingVideosListContainer>
        {gamingVideosList.map(each => (
          <GamingVideoCard key={each.id} gamingVideoData={each} />
        ))}
      </GamingVideosListContainer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeMainContainer>
              <Navbar />
              <HomeContentContainer>
                <Sidebar />
                <ContentContainer isDarkTheme={isDarkTheme}>
                  <TrendingTopContainer isDarkTheme={isDarkTheme}>
                    <TrendingIconContainer isDarkTheme={isDarkTheme}>
                      <SiYoutubegaming size={30} style={{color: 'red'}} />
                    </TrendingIconContainer>
                    <TrendingTopContainerHeading isDarkTheme={isDarkTheme}>
                      Gaming
                    </TrendingTopContainerHeading>
                  </TrendingTopContainer>
                  <TrendingPageMainContainer
                    isDarkTheme={isDarkTheme}
                    data-testid="gaming"
                  >
                    {this.renderGaming()}
                  </TrendingPageMainContainer>
                </ContentContainer>
              </HomeContentContainer>
            </HomeMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming
