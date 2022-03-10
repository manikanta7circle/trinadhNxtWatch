import styled from 'styled-components'

export const HomeVideosCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 30px;
  margin-left: 0px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
  }
`
export const HomeVideoCardThumbnail = styled.img`
  width: 100%;
`

export const HomeVideoCardDetailsContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
`

export const HomeVideoCardProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 5px;
`
export const HomeVideoCardDetails = styled.div`
  width: 100%;
`

export const HomeVideoCardTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-family: Roboto;
  margin-top: 0px;
  margin-bottom: 5px;
`
export const HomeVideoCardChannelName = styled.p`
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};
  margin: 0px;
  margin-bottom: 5px;
`
export const HomeVideoCardViewsTime = styled.p`
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};
  margin: 0px;
  margin-bottom: 5px;
`
