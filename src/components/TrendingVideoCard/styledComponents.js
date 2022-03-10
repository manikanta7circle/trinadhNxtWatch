import styled from 'styled-components'

export const TrendingVideoCardContainer = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  height: 200px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 300px;
  }
`
export const TrendingVideoCardImage = styled.img`
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const TrendingVideoCardDetails = styled.div`
  padding: 20px;
`
export const TrendingVideoCardTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-family: Roboto;
  margin-top: 0px;
  margin-bottom: 5px;
`
export const TrendingVideoCardChannelName = styled.p`
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};
  margin: 0px;
  margin-bottom: 5px;
`
export const TrendingVideoCardViews = styled.p`
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};
  margin: 0px;
  margin-bottom: 5px;
`
