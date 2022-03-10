import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import VideoPlayer from '../VideoPlayer'

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
  VideoDetailsContentContainer,
  VideoDetailsContent,
  VideoDetailsTitle,
  VideoDetailsViewContainer,
  VideoDetailsView,
  VideoDetailsUserButtonsContainer,
  VideoDetailsLikeButton,
  VideoDetailsDislikeButton,
  VideoDetailsSaveButton,
  VideoDetailsBottomContainer,
  VideoDetailsIconImage,
  VideoDetailsBottomContentContainer,
  VideoDetailsSub,
  VideoDetailsDescription,
  VideoDetailsChannelName,
  VideoDetailsSavedButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const HomeFailureLightImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const HomeFailureDarkImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

class VideoDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetailsData: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onClickRetry = () => {
    this.getVideoDetails()
  }

  onClickLike = () => {
    this.setState(prevState => ({isLiked: !prevState.isLiked}))
    this.setState({isDisliked: false})
  }

  onClickDislike = () => {
    this.setState(prevState => ({isDisliked: !prevState.isDisliked}))
    this.setState({isLiked: false})
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updateData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channelName: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      console.log(updateData)
      this.setState({
        videoDetailsData: updateData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideo = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
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
              We are having some trouble to complete your request. Please try
              again.
            </HomeFailureMessageDescription>
            <HomeFailureRetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </HomeFailureRetryButton>
          </HomeFailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideosList = () => {
    const {videoDetailsData, isLiked, isDisliked} = this.state
    const age =
      videoDetailsData.publishedAt !== undefined &&
      formatDistanceToNow(new Date(videoDetailsData.publishedAt))
    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            savedVideosList,
            addSavedItem,
            removeSavedItem,
          } = value
          console.log(savedVideosList)
          const isVideoInSavedList =
            savedVideosList.length > 0 &&
            savedVideosList.find(each => each.id === videoDetailsData.id)
          const onClickSave = () => {
            addSavedItem(videoDetailsData)
          }

          const onClickSaved = () => {
            removeSavedItem(videoDetailsData.id)
          }
          return (
            <VideoDetailsContentContainer
              isDarkTheme={isDarkTheme}
              data-testid="videoItemDetails"
            >
              <VideoPlayer videoUrl={videoDetailsData.videoUrl} />
              <VideoDetailsContent>
                <VideoDetailsTitle isDarkTheme={isDarkTheme}>
                  {videoDetailsData.title}
                </VideoDetailsTitle>
                <VideoDetailsViewContainer>
                  <VideoDetailsView
                    isDarkTheme={isDarkTheme}
                  >{`${videoDetailsData.viewCount} views | ${age}`}</VideoDetailsView>
                  <VideoDetailsUserButtonsContainer>
                    <VideoDetailsLikeButton
                      isDarkTheme={isDarkTheme}
                      onClick={this.onClickLike}
                      isLiked={isLiked}
                    >
                      <AiOutlineLike /> Like
                    </VideoDetailsLikeButton>
                    <VideoDetailsDislikeButton
                      isDarkTheme={isDarkTheme}
                      onClick={this.onClickDislike}
                      isDisliked={isDisliked}
                    >
                      <BiDislike /> Dislike
                    </VideoDetailsDislikeButton>
                    {isVideoInSavedList ? (
                      <VideoDetailsSavedButton
                        isDarkTheme={isDarkTheme}
                        onClick={onClickSaved}
                      >
                        <MdPlaylistAdd />
                        Saved
                      </VideoDetailsSavedButton>
                    ) : (
                      <VideoDetailsSaveButton
                        isDarkTheme={isDarkTheme}
                        onClick={onClickSave}
                      >
                        <MdPlaylistAdd />
                        Save
                      </VideoDetailsSaveButton>
                    )}
                  </VideoDetailsUserButtonsContainer>
                </VideoDetailsViewContainer>
              </VideoDetailsContent>
              <VideoDetailsBottomContainer>
                <VideoDetailsIconImage
                  src={videoDetailsData.profileImageUrl}
                  alt="channel logo"
                />
                <VideoDetailsBottomContentContainer>
                  <VideoDetailsChannelName isDarkTheme={isDarkTheme}>
                    {videoDetailsData.channelName}
                  </VideoDetailsChannelName>
                  <VideoDetailsSub isDarkTheme={isDarkTheme}>
                    {`${videoDetailsData.subscriberCount} subscribers`}
                  </VideoDetailsSub>
                  <VideoDetailsDescription isDarkTheme={isDarkTheme}>
                    {videoDetailsData.description}
                  </VideoDetailsDescription>
                </VideoDetailsBottomContentContainer>
              </VideoDetailsBottomContainer>
            </VideoDetailsContentContainer>
          )
        }}
      </ThemeContext.Consumer>
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
                  {this.renderVideo()}
                </ContentContainer>
              </HomeContentContainer>
            </HomeMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails
