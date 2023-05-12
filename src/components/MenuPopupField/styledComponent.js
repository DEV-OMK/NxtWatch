import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
  width: 100%;
  height: 100%;
`

export const LinksContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px;
  list-style-type: none;
`

export const LinkItem = styled.li`
  width: 100%;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: ${props => (props.isActiveId ? 'bold' : '500')};
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#1e293b')};
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 2.5;
  padding: 0px;
  padding-left: 35%;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${props => {
    if (props.isActiveId) {
      return props.isDarkTheme ? '#383838' : '#e2e8f0'
    }
    return 'transparent'
  }};
`

export const IconContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-right: 20px;
  margin-left: 20px;
  color: ${props => {
    if (props.isActiveId) {
      return '#ff0000'
    }
    return props.isDarkTheme ? '#cccccc' : '#313131'
  }};
`

export const FooterContainer = styled(LinksContainer)`
  padding-left: 20px;
  padding-right: 15px;
`

export const FooterHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#1e293b')};
`

export const FooterIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FooterIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`

export const FooterCaption = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#1e293b')};
`
