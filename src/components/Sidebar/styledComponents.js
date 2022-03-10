import styled from 'styled-components'

export const SidebarContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9')};
  width: 15%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`
export const NavLinksContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
`
export const NavLink = styled.li`
  padding: 0px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  font-family: Roboto;
`
export const SidebarBottomContainer = styled.div`
  padding: 20px;
`

export const ContactUsHeading = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-weight: bold;
`
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const IconImage = styled.img`
  height: 30px;
  width: 30px;
`
export const Message = styled.p`
  font-weight: bold;
  font-family: Roboto;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
