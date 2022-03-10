import styled from 'styled-components'

export const SavedVideosMainContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  height: 100%;
`
export const SavedVideosListContainer = styled.ul`
  list-style-type: none;
  padding: 40px;
`
