import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import TrendingVideoCard from '../TrendingVideoCard'

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
  TrendingVideosListContainer,
} from './styledComponents'

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

class Trending extends Component {
  state = {trendingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideosList()
  }

  onClickRetry = () => {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channelName: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTrending = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderTrendingFailureView()
      default:
        return null
    }
  }

  renderTrendingVideos = () => {
    const {trendingVideosList} = this.state
    return (
      <TrendingVideosListContainer>
        {trendingVideosList.map(eachItem => (
          <TrendingVideoCard key={eachItem.id} trendingVideoData={eachItem} />
        ))}
      </TrendingVideosListContainer>
    )
  }

  renderLoadingView = () => (
    <HomeLoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </HomeLoadingContainer>
  )

  renderTrendingFailureView = () => (
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
                      <HiFire size={30} style={{color: 'red'}} />
                    </TrendingIconContainer>
                    <TrendingTopContainerHeading isDarkTheme={isDarkTheme}>
                      Trending
                    </TrendingTopContainerHeading>
                  </TrendingTopContainer>
                  <TrendingPageMainContainer
                    isDarkTheme={isDarkTheme}
                    data-testid="trending"
                  >
                    {this.renderTrending()}
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

export default Trending
