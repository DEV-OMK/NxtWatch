import styled from 'styled-components'

export const VideoCard = styled.li`
  width: 47%;
  padding: 0px;
  margin: 0px;
  margin-bottom: 30px;
  margin-right: 3%;
  display: flex;
  flex-direction: column;
  background-color: transparent;

  @media screen and (min-width: 576px) {
    width: 31%;
    margin-right: 2%;
  }
`

export const Thumbnail = styled.img`
  width: 100%;

  @media screen and (min-width: 576px) {
    width: 100%;
  }
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  margin: 0px;
  margin-bottom: 6px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#212121')};
`

export const VideoText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  margin: 0px;
  line-height: 2;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#616e7c')};
`
