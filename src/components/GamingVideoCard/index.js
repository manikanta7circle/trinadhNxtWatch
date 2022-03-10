import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  GamingVideoCardContainer,
  GamingVideoCardImage,
  GamingVideoCardTitle,
  GamingVideoCardView,
} from './styledComponents'

const GamingVideoCard = props => {
  const {gamingVideoData} = props
  const {title, thumbnailUrl, viewCount, id} = gamingVideoData
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <GamingVideoCardContainer>
              <GamingVideoCardImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingVideoCardTitle isDarkTheme={isDarkTheme}>
                {title}
              </GamingVideoCardTitle>
              <GamingVideoCardView isDarkTheme={isDarkTheme}>
                {`${viewCount} Watching Worldwide`}
              </GamingVideoCardView>
            </GamingVideoCardContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoCard
