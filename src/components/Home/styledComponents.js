import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`
export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`
export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const BannerContainer = styled.div`
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 250px;
  padding: 20px;
`
export const BannerTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const BannerLogoImage = styled.img`
  height: 80px;
  @media (max-width: 768px) {
    height: 40px;
  }
`
export const BannerNote = styled.p`
  font-family: Roboto;
`
export const GetItNowButton = styled.button`
  padding: 10px;
  border: 1px solid #000000;
  background-color: transparent;
  font-weight: bold;
`
export const CloseButton = styled.button`
  border: 0px;
  background-color: transparent;
  cursor: pointer;
`
export const ContentMainContainer = styled.div`
  padding: 30px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#f1f5f9')};
  @media (max-width: 768px) {
    padding: 10px;
  }
`
export const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SearchInput = styled.input`
  padding: 8px;
  border-width: 1px;
  border-style: solid;
  border-radius: 1px;
  border-color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')}
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  width: 400px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const SearchButton = styled.button`
  padding: 6px;
  cursor: pointer;
  width: 50px;
  color: white;
`

export const HomeResultsViewContainer = styled.div`
  width: 100%;
  padding: 0px;
`
export const HomeVideosListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0px;
  }
`
export const HomeLoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const HomeFailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`
export const HomeFailureImage = styled.img`
  height: 300px;
  width: 300px;
`
export const HomeFailureMessage = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-family: Roboto;
  font-weight: bold;
  text-align: center;
`
export const HomeFailureMessageDescription = styled.p`
  color: ${props => (props.isDarkTheme ? ' #f1f1f1' : '#606060')};
  text-align: center;
  font-family: Roboto;
`
export const HomeFailureRetryButton = styled.button`
  border: 0px;
  border-radius: 8px;
  background-color: #4f46e5;
  color: #ffffff;
  padding: 8px;
  width: 80px;
`
