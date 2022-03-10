import {Component} from 'react'
import Cookies from 'js-cookie'
import {RiCloseFill} from 'react-icons/ri'
import {GrSearch} from 'react-icons/gr'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import HomeVideosCard from '../HomeVideosCard'

import {
  HomeMainContainer,
  HomeContentContainer,
  ContentContainer,
  BannerContainer,
  BannerTopContainer,
  BannerLogoImage,
  BannerNote,
  GetItNowButton,
  CloseButton,
  ContentMainContainer,
  SearchBoxContainer,
  SearchInput,
  SearchButton,
  HomeVideosListContainer,
  HomeResultsViewContainer,
  HomeLoadingContainer,
  HomeFailureViewContainer,
  HomeFailureImage,
  HomeFailureMessage,
  HomeFailureMessageDescription,
  HomeFailureRetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  nullData: 'NULL_DATA',
}

const HomeFailureLightImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const HomeFailureDarkImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    homeVideosList: [],
  }

  componentDidMount() {
    this.getHomePageData()
  }

  onClickRetry = () => {
    this.getHomePageData()
  }

  getHomePageData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        channelName: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
      }))
      if (updatedData.length > 0) {
        this.setState({
          homeVideosList: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.nullData})
      }
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    this.getHomePageData()
  }

  onClickClose = () => {
    this.setState({showBanner: false})
  }

  renderVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosList()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.nullData:
        return this.renderNoResultsView()
      default:
        return null
    }
  }

  renderVideosList = () => {
    const {homeVideosList} = this.state
    return (
      <HomeVideosListContainer>
        {homeVideosList.map(each => (
          <HomeVideosCard key={each.id} videoData={each} />
        ))}
      </HomeVideosListContainer>
    )
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

  renderNoResultsView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <HomeFailureViewContainer>
            <HomeFailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <HomeFailureMessage isDarkTheme={isDarkTheme}>
              No Search results found
            </HomeFailureMessage>
            <HomeFailureMessageDescription isDarkTheme={isDarkTheme}>
              Try different key words or remove search filter
            </HomeFailureMessageDescription>
            <HomeFailureRetryButton>Retry</HomeFailureRetryButton>
          </HomeFailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    const {showBanner, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeMainContainer>
              <Navbar />
              <HomeContentContainer>
                <Sidebar />
                <ContentContainer isDarkTheme={isDarkTheme} data-testid="home">
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      <BannerTopContainer>
                        <BannerLogoImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <CloseButton
                          type="button"
                          onClick={this.onClickClose}
                          data-testid="close"
                        >
                          <RiCloseFill />
                        </CloseButton>
                      </BannerTopContainer>
                      <BannerNote>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerNote>
                      <GetItNowButton>GET IT NOW</GetItNowButton>
                    </BannerContainer>
                  )}
                  <ContentMainContainer isDarkTheme={isDarkTheme}>
                    <SearchBoxContainer>
                      <SearchInput
                        type="search"
                        placeholder="search"
                        isDarkTheme={isDarkTheme}
                        onChange={this.onChangeSearchInput}
                        value={searchInput}
                      />
                      <SearchButton
                        type="button"
                        onClick={this.onClickSearchButton}
                        data-testid="searchButton"
                      >
                        <GrSearch />
                      </SearchButton>
                    </SearchBoxContainer>
                    <HomeResultsViewContainer>
                      {this.renderVideos()}
                    </HomeResultsViewContainer>
                  </ContentMainContainer>
                </ContentContainer>
              </HomeContentContainer>
            </HomeMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
