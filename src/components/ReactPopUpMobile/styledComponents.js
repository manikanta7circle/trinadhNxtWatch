import styled from 'styled-components'

export const MenuButton = styled.button`
  border: 0px;
  background-color: transparent;
  @media (min-width: 768px) {
    display: none;
  }
`
export const MobileMainContainer = styled.div`
  padding: 40px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  border-radius: 8px;

  @media (min-width: 768px) {
    display: none;
  }
`
export const ReactMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`
export const CancelButtonMobile = styled.button`
  border: 0px;
  color: #9fadbf;
  background-color: transparent;
`
