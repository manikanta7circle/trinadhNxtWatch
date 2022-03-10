import styled from 'styled-components'

export const NavMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9')};
`
export const NavImage = styled.img`
  height: 40px;
  @media (max-width: 768px) {
    height: 30px;
  }
`
export const NavRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  @media (max-width: 768px) {
    width: 40%;
  }
`
export const ThemeChangeButton = styled.button`
  border: 0px;
  background-color: transparent;
`
export const UserImage = styled.img`
  height: 40px;
  width: 40px;
  @media (max-width: 768px) {
    display: none;
  }
`
