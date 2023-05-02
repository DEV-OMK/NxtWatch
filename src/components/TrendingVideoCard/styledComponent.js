import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  padding: 0px;
  margin: 0px;
  margin-bottom: 20px;
`

export const VideoCard = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  background-color: transparent;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`

export const Thumbnail = styled.img`
  width: 100%;

  @media screen and (min-width: 576px) {
    width: 50%;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  @media screen and (min-width: 576px) {
    width: 98%;
    margin-left: 2%;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;

  @media screen and (min-width: 576px) {
    display: none;
  }
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

  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
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

  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`

export const DotIcon = styled(VideoText)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: 6px;
  font-size: 25px;
  color: color: ${props => (props.isDarkTheme ? '#94a3b8' : '#616e7c')};
`
