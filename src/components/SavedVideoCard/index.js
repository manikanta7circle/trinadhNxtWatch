import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  TrendingVideoCardContainer,
  TrendingVideoCardImage,
  TrendingVideoCardDetails,
  TrendingVideoCardTitle,
  TrendingVideoCardChannelName,
  TrendingVideoCardViews,
} from '../TrendingVideoCard/styledComponents'

const SavedVideoCard = props => {
  const {savedVideoData} = props
  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    viewCount,
    publishedAt,
  } = savedVideoData
  const age = formatDistanceToNow(new Date(publishedAt))
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <TrendingVideoCardContainer>
              <TrendingVideoCardImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoCardDetails>
                <TrendingVideoCardTitle isDarkTheme={isDarkTheme}>
                  {title}
                </TrendingVideoCardTitle>
                <TrendingVideoCardChannelName isDarkTheme={isDarkTheme}>
                  {channelName}
                </TrendingVideoCardChannelName>
                <TrendingVideoCardViews isDarkTheme={isDarkTheme}>
                  {`${viewCount} views | ${age} ago`}
                </TrendingVideoCardViews>
                <TrendingVideoCardViews isDarkTheme={isDarkTheme}>
                  {publishedAt}
                </TrendingVideoCardViews>
              </TrendingVideoCardDetails>
            </TrendingVideoCardContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoCard
