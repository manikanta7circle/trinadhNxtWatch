import styled from 'styled-components'

export const VideoDetailsContentContainer = styled.div`
  padding: 40px;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const VideoDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto;
`
export const VideoDetailsTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const VideoDetailsViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    border-bottom: 1px solid #cbd5e1;
    margin-bottom: 10px;
  }
`
export const VideoDetailsView = styled.p`
  font-family: Roboto;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};
`

export const VideoDetailsUserButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 30px;
`
export const VideoDetailsLikeButton = styled.button`
  border: 0px;
  background-color: transparent;
  font-weight: bold;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
`

export const VideoDetailsDislikeButton = styled.button`
  border: 0px;
  background-color: transparent;
  font-weight: bold;
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
`
export const VideoDetailsSaveButton = styled.button`
  border: 0px;
  font-weight: bold;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};
`

export const VideoDetailsSavedButton = styled.button`
  border: 0px;
  font-weight: bold;
  background-color: transparent;
  color: #4f46e5;
  cursor: pointer;
`
export const VideoDetailsBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoDetailsIconImage = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 15px;
`
export const VideoDetailsBottomContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoDetailsSub = styled.p`
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};
`
export const VideoDetailsDescription = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const VideoDetailsChannelName = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  margin-top: 0px;
  margin-bottom: 0px;
`
