import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const NotFoundContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const NotFoundResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`

export const NotFoundViewContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export const NotFoundImage = styled.img`
  width: 80%;
  max-width: 300px;

  @media screen and (min-width: 768px) {
    width: 100%;
    min-width: 300px;
    max-width: 450px;
  }
`

export const NotFoundHeading = styled.h2`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#313131')};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 22px;
  text-align: center;
`

export const NotFoundCaption = styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  margin: 0px;
  text-align: center;
`
