import styled from 'styled-components'

export const GamingVideoCardContainer = styled.li`
  padding: 0px;
  width: 100%;
  margin: 30px;
`
export const GamingVideoCardImage = styled.img`
  height: 300px;
  margin-bottom: 10px;
`
export const GamingVideoCardTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-family: Roboto;
  margin-top: 0px;
  margin-bottom: 5px;
`

export const GamingVideoCardView = styled.p`
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};
  margin: 0px;
  margin-bottom: 5px;
`
