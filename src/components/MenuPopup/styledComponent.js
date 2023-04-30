import styled from 'styled-components'

export const PopupCloseButton = styled.button`
  background-color: transparent;
  font-size: 25px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#313131')};
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0px;
  align-self: flex-end;
  margin: 40px;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
`
