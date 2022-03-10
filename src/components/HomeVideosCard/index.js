import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeVideosCardContainer,
  HomeVideoCardThumbnail,
  HomeVideoCardDetailsContainer,
  HomeVideoCardProfileImage,
  HomeVideoCardDetails,
  HomeVideoCardTitle,
  HomeVideoCardChannelName,
  HomeVideoCardViewsTime,
} from './styledComponents'

const HomeVideosCard = props => {
  const {videoData} = props
  const {
    channelName,
    title,
    thumbnailUrl,
    profileImageUrl,
    viewCount,
    publishedAt,
    id,
  } = videoData
  const age = formatDistanceToNow(new Date(publishedAt))
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <HomeVideosCardContainer>
            <Link
              to={`/videos/${id}`}
              style={{
                textDecoration: 'none',
              }}
            >
              <HomeVideoCardThumbnail
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <HomeVideoCardDetailsContainer>
                <HomeVideoCardProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <HomeVideoCardDetails>
                  <HomeVideoCardTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </HomeVideoCardTitle>
                  <HomeVideoCardChannelName isDarkTheme={isDarkTheme}>
                    {channelName}
                  </HomeVideoCardChannelName>
                  <HomeVideoCardViewsTime isDarkTheme={isDarkTheme}>
                    {`${viewCount} views | ${age} ago`}
                  </HomeVideoCardViewsTime>
                </HomeVideoCardDetails>
              </HomeVideoCardDetailsContainer>
            </Link>
          </HomeVideosCardContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideosCard
