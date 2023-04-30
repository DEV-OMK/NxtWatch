import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 5%;
  padding-left: 5%;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
`

export const LogoButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0px;
  cursor: pointer;
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const LogoImage = styled.img`
  width: 100%;
  max-width: 100px;

  @media screen and (min-width: 768px) {
    width: 100%;
    min-width: 100px;
    max-width: 150px;
  }
`

export const ButtonsContainerSm = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ButtonsContainerLg = styled(ButtonsContainerSm)`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const ThemeButton = styled(LogoButton)`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  font-size: 30px;
  width: 30px;
  height: 30px;
  padding: 0px;
  margin: 0px;
  margin-right: 20px;
`

export const ProfileButtonSm = styled(ThemeButton)``

export const ProfileButtonLg = styled(LogoButton)`
  margin-right: 20px;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  padding: 0px;
  margin: 0px;
`

export const LogoutButtonSm = styled(ThemeButton)`
  margin: 0px;
`

export const LogoutButtonLg = styled.button`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  padding: 10px;
  padding-inline: 25px;
  margin: 0px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`
