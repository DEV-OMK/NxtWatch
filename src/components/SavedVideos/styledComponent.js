import styled from 'styled-components'

export const NoSavedVideosViewContainer = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export const NoSavedVideosViewImage = styled.img`
  width: 80%;
  max-width: 300px;

  @media screen and (min-width: 768px) {
    width: 100%;
    min-width: 300px;
    max-width: 400px;
  }
`

export const NoSavedVideosViewHeading = styled.h2`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#313131')};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 22px;
  text-align: center;
`

export const NoSavedVideosViewCaption = styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  margin: 0px;
  text-align: center;
`

export const SavedVideosListContainer = styled.ul`
  margin: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SavedVideosContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const SavedVideosResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`

export const SavedVideosBanner = styled.div`
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

export const SavedVideosBannerHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 40px;
  margin: 0px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`
