import styled from 'styled-components'

export const PopupCard = styled.div`
  padding: 30px;
  border-radius: 15px;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PopupText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const CancelButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500px;
  padding: 8px;
  padding-inline: 12px;
  color: #4f46e5;
  background-color: transparent;
  border: 1px solid #4f46e5;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  margin: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const ConfirmButton = styled(CancelButton)`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
`
