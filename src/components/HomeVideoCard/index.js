import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import {
  VideoCard,
  Thumbnail,
  VideoDetailsContainer,
  ProfileContainer,
  Profile,
  VideoDetails,
  VideoTitle,
  DetailsXs,
  DetailsSm,
  DetailsCountAndDate,
  VideoText,
  DotIcon,
} from './styledComponent'
import NxtWatchContext from '../../context/NxtWatchContext'

const HomeVideoCard = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {videoDetails} = props
      const {
        id,
        title,
        thumbnailUrl,
        viewCount,
        publishedAt,
        channel,
      } = videoDetails
      const {name, profileImageUrl} = channel

      return (
        <VideoCard>
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetailsContainer>
              <ProfileContainer>
                <Profile src={profileImageUrl} alt="channel logo" />
              </ProfileContainer>
              <VideoDetails>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <DetailsXs>
                  <VideoText isDarkTheme={isDarkTheme}>{name}</VideoText>
                  <DotIcon isDarkTheme={isDarkTheme}>
                    <BsDot />
                  </DotIcon>
                  <VideoText isDarkTheme={isDarkTheme}>
                    {viewCount} views
                  </VideoText>
                  <DotIcon isDarkTheme={isDarkTheme}>
                    <BsDot />
                  </DotIcon>
                  <VideoText isDarkTheme={isDarkTheme}>
                    {formatDistanceToNow(new Date(publishedAt))}
                  </VideoText>
                </DetailsXs>
                <DetailsSm>
                  <VideoText isDarkTheme={isDarkTheme}>{name}</VideoText>
                  <DetailsCountAndDate>
                    <VideoText isDarkTheme={isDarkTheme}>
                      {`${viewCount} views`}
                    </VideoText>
                    <DotIcon isDarkTheme={isDarkTheme}>
                      <BsDot />
                    </DotIcon>
                    <VideoText isDarkTheme={isDarkTheme}>
                      {formatDistanceToNow(new Date(publishedAt))}
                    </VideoText>
                  </DetailsCountAndDate>
                </DetailsSm>
              </VideoDetails>
            </VideoDetailsContainer>
          </Link>
        </VideoCard>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default HomeVideoCard
