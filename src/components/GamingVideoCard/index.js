import {Link} from 'react-router-dom'

import {
  VideoCard,
  Thumbnail,
  VideoDetails,
  VideoTitle,
  VideoText,
} from './styledComponent'
import NxtWatchContext from '../../context/NxtWatchContext'

const HomeVideoCard = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {videoDetails} = props
      const {id, title, thumbnailUrl, viewCount} = videoDetails

      return (
        <VideoCard>
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetails>
              <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
              <VideoText isDarkTheme={isDarkTheme}>
                {viewCount} Watching
              </VideoText>
              <VideoText isDarkTheme={isDarkTheme}>Worldwide</VideoText>
            </VideoDetails>
          </Link>
        </VideoCard>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default HomeVideoCard
