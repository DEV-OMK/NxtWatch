import styled from 'styled-components'

export const VideoCard = styled.li`
  width: 100%;
  padding: 0px;
  margin: 0px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  background-color: transparent;

  @media screen and (min-width: 576px) {
    width: 48%;
  }

  @media screen and (min-width: 768px) {
    width: 32%;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`

export const Profile = styled.img`
  width: 35px;
  height: 35px;
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  margin: 0px;
  margin-bottom: 6px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#212121')};
`

export const DetailsXs = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const DetailsSm = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 575px) {
    display: none;
  }
`
export const DetailsCountAndDate = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin: 0px;
  line-height: 2;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#616e7c')};
`

export const DotIcon = styled(VideoText)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: 6px;
  font-size: 25px;
  color: color: ${props => (props.isDarkTheme ? '#94a3b8' : '#616e7c')};
`
