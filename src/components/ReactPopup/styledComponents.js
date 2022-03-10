import styled from 'styled-components'

export const LogoutButton = styled.button`
  background-color: transparent;
  padding: 5px;
  width: 60px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${props => (props.isDarkTheme ? '#ffffff' : '#4f46e5')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#4f46e5')};
`
export const LogoutMainContainer = styled.div`
  padding: 40px;
  border-radius: 8px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
`
export const Request = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const CancelButton = styled.button`
  border: 1px solid #9fadbf;
  border-radius: 8px;
  color: #9fadbf;
  background-color: transparent;
  margin: 20px;
  padding: 15px;
`
export const ConfirmButton = styled.button`
  color: #ffffff;
  border: 0px;
  border-radius: 8px;
  background-color: #2082f2;
  margin: 20px;
  padding: 15px;
`
export const LogoutMobileButton = styled.button`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
