import styled from 'styled-components'

export const GamingVideosContainer = styled.ul`
  margin: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const GamingContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`

export const GamingBanner = styled.div`
  width: 100%;
  padding: 5%;
  padding-top: 18px;
  padding-bottom: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#f1f1f1')};
`

export const BannerIconContainer = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#e2e8f0')};
  color: #ff0000;
  font-size: 40px;
`

export const GamingBannerHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 40px;
  margin: 0px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`
