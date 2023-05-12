import {Component} from 'react'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItemDetailsCardContainer,
  VideoDetailsContainer,
  VideoTitle,
  VideoDetails,
  TimeAndViewsDetails,
  ButtonsContainer,
  VideoText,
  DotIcon,
  Button,
  ButtonIconContainer,
  Hr,
  ChannelDetailsSm,
  DetailsSm,
  ChannelDetailsLg,
  ProfileContainer,
  Profile,
  DetailsLg,
  DescriptionText,
  ChannelName,
} from './styledComponent'

class VideoItemDetailsCard extends Component {
  state = {
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  onClickLikeButton = () => {
    const {isLiked} = this.state
    if (isLiked) {
      this.setState({isLiked: false})
    } else {
      this.setState({
        isLiked: true,
        isDisliked: false,
      })
    }
  }

  onClickDislikeButton = () => {
    const {isDisliked} = this.state
    if (isDisliked) {
      this.setState({isDisliked: false})
    } else {
      this.setState({
        isLiked: false,
        isDisliked: true,
      })
    }
  }

  renderVideo = () => {
    const {videoDetails} = this.props
    const {videoUrl} = videoDetails

    return <ReactPlayer url={videoUrl} width="100%" controls />
  }

  renderVideoDetails = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideosList, toggleSavedListItem} = value
        const {isLiked, isDisliked} = this.state
        const {videoDetails} = this.props
        const {
          title,
          viewCount,
          publishedAt,
          description,
          channel,
        } = videoDetails
        const {name, profileImageUrl, subscriberCount} = channel
        const isSaved = savedVideosList.some(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        const onClickSaveButton = () => {
          toggleSavedListItem(videoDetails)
          this.setState(prevState => ({
            isSaved: !prevState.isSaved,
          }))
        }

        return (
          <VideoDetailsContainer>
            <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
            <VideoDetails>
              <TimeAndViewsDetails>
                <VideoText isDarkTheme={isDarkTheme}>
                  {viewCount} views
                </VideoText>
                <DotIcon isDarkTheme={isDarkTheme}>
                  <BsDot />
                </DotIcon>
                <VideoText isDarkTheme={isDarkTheme}>
                  {formatDistanceToNow(new Date(publishedAt))}
                </VideoText>
              </TimeAndViewsDetails>
              <ButtonsContainer>
                <Button
                  isDarkTheme={isDarkTheme}
                  type="button"
                  isClicked={isLiked}
                  onClick={this.onClickLikeButton}
                >
                  <ButtonIconContainer isDarkTheme={isDarkTheme}>
                    <BiLike />
                  </ButtonIconContainer>{' '}
                  Like
                </Button>
                <Button
                  isDarkTheme={isDarkTheme}
                  type="button"
                  isClicked={isDisliked}
                  onClick={this.onClickDislikeButton}
                >
                  <ButtonIconContainer isDarkTheme={isDarkTheme}>
                    <BiDislike />
                  </ButtonIconContainer>{' '}
                  Dislike
                </Button>
                <Button
                  isDarkTheme={isDarkTheme}
                  type="button"
                  isClicked={isSaved}
                  onClick={onClickSaveButton}
                >
                  <ButtonIconContainer isDarkTheme={isDarkTheme}>
                    <BiListPlus />
                  </ButtonIconContainer>{' '}
                  {isSaved ? 'Saved' : 'Save'}
                </Button>
              </ButtonsContainer>
            </VideoDetails>
            <Hr isDarkTheme={isDarkTheme} />
            <ChannelDetailsSm>
              <DetailsSm>
                <ProfileContainer>
                  <Profile src={profileImageUrl} alt="channel logo" />
                </ProfileContainer>
                <div>
                  <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                  <VideoText isDarkTheme={isDarkTheme}>
                    {subscriberCount} subscribers
                  </VideoText>
                </div>
              </DetailsSm>
              <DescriptionText isDarkTheme={isDarkTheme}>
                {description}
              </DescriptionText>
            </ChannelDetailsSm>
            <ChannelDetailsLg>
              <ProfileContainer>
                <Profile src={profileImageUrl} alt="channel logo" />
              </ProfileContainer>
              <DetailsLg>
                <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                <VideoText isDarkTheme={isDarkTheme}>
                  {subscriberCount} subscribers
                </VideoText>
                <DescriptionText marginTop="20px" isDarkTheme={isDarkTheme}>
                  {description}
                </DescriptionText>
              </DetailsLg>
            </ChannelDetailsLg>
          </VideoDetailsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <VideoItemDetailsCardContainer>
        {this.renderVideo()}
        {this.renderVideoDetails()}
      </VideoItemDetailsCardContainer>
    )
  }
}

export default VideoItemDetailsCard
