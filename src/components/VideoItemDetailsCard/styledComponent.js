import styled from 'styled-components'

export const VideoItemDetailsCardContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 15px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#212121')};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const VideoDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const TimeAndViewsDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

export const ButtonsContainer = styled(TimeAndViewsDetails)``

export const VideoText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin: 0px;
  line-height: 2;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#616e7c')};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const DotIcon = styled(VideoText)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#616e7c')};
`

export const ButtonIconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 25px;
  color: inherit;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  padding: 0px;
  margin: 0px;
  margin-right: 20px;
  line-height: 2;
  background-color: transparent;
  color: ${props => {
    if (props.isClicked) {
      return '#2563eb'
    }
    return '#64748b'
  }};

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const Hr = styled.hr`
  width: 100%;
  height: 1px;
  color: color: ${props => (props.isDarkTheme ? '#94a3b8' : '#616e7c')};
`

export const ChannelDetailsSm = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ChannelDetailsLg = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const DetailsSm = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

export const DetailsLg = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`

export const Profile = styled.img`
  width: 35px;
  height: 35px;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px;
  line-height: 2;
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const DescriptionText = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px;
  line-height: 2;
  font-size: 14px;
  margin-top: 20px;
  line-height: 1.5;
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#64748b')};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
