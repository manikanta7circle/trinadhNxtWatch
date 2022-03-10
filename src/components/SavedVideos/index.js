import {HiFire} from 'react-icons/hi'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import SavedVideoCard from '../SavedVideoCard'

import {
  HomeMainContainer,
  HomeContentContainer,
  ContentContainer,
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
} from '../Trending/styledComponents'

import {
  SavedVideosMainContainer,
  SavedVideosListContainer,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosList} = value
      return (
        <HomeMainContainer>
          <Navbar />
          <HomeContentContainer>
            <Sidebar />
            <ContentContainer isDarkTheme={isDarkTheme}>
              <SavedVideosMainContainer
                isDarkTheme={isDarkTheme}
                data-testid="savedVideos"
              >
                <TrendingTopContainer isDarkTheme={isDarkTheme}>
                  <TrendingIconContainer isDarkTheme={isDarkTheme}>
                    <HiFire size={30} style={{color: 'red'}} />
                  </TrendingIconContainer>
                  <TrendingTopContainerHeading isDarkTheme={isDarkTheme}>
                    Saved Videos
                  </TrendingTopContainerHeading>
                </TrendingTopContainer>
                {savedVideosList.length > 0 ? (
                  <SavedVideosListContainer>
                    {savedVideosList.map(each => (
                      <SavedVideoCard key={each.id} savedVideoData={each} />
                    ))}
                  </SavedVideosListContainer>
                ) : (
                  <HomeFailureViewContainer>
                    <HomeFailureImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <HomeFailureMessage isDarkTheme={isDarkTheme}>
                      No saved videos found
                    </HomeFailureMessage>
                    <HomeFailureMessageDescription>
                      You can save your videos while watching them
                    </HomeFailureMessageDescription>
                    <HomeFailureRetryButton>Retry</HomeFailureRetryButton>
                  </HomeFailureViewContainer>
                )}
              </SavedVideosMainContainer>
            </ContentContainer>
          </HomeContentContainer>
        </HomeMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
