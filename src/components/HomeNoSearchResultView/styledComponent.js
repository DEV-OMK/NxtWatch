import styled from 'styled-components'

export const HomeNoSearchResultContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export const NoSearchImage = styled.img`
  width: 80%;
  max-width: 300px;

  @media screen and (min-width: 768px) {
    width: 100%;
    min-width: 300px;
    max-width: 450px;
  }
`

export const NoSearchHeading = styled.h2`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#313131')};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 22px;
  text-align: center;
`

export const NoSearchCaption = styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  margin: 0px;
  text-align: center;
`

export const RetryButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  padding: 10px;
  padding-inline: 20px;
  margin: 15px;
`
