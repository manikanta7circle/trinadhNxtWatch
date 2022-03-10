import styled from 'styled-components'

export const TrendingTopContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f1f1')};
`
export const TrendingIconContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0F0F0F' : '#e2e8f0')};
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 70px;
  margin-right: 15px;
`

export const TrendingTopContainerHeading = styled.h1`
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const TrendingPageMainContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0F0F0F' : '#f9f9f9')};
  width: 100%;
`
export const TrendingVideosListContainer = styled.ul`
  list-style-type: none;
  padding: 40px;
`
