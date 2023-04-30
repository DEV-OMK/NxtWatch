import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Sidebar from '../Sidebar'

import FailureView from '../FailureView'
import VideoItemDetailsCard from '../VideoItemDetailsCard'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  MainContainer,
  SubContainer,
  VideoItemDetailsContainer,
  VideoItemDetailsResponsiveContainer,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetailsApiStatus: apiStatusConstants.initial,
    videoDetails: '',
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({
      videoDetailsApiStatus: apiStatusConstants.inProgress,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const videoDetailsUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videoDetailsUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      const fetchedVideo = fetchedData.video_details
      const updatedFetchedVideo = {
        id: fetchedVideo.id,
        title: fetchedVideo.title,
        videoUrl: fetchedVideo.video_url,
        thumbnailUrl: fetchedVideo.thumbnail_url,
        viewCount: fetchedVideo.view_count,
        publishedAt: fetchedVideo.published_at,
        description: fetchedVideo.description,
        channel: {
          name: fetchedVideo.channel.name,
          profileImageUrl: fetchedVideo.channel.profile_image_url,
          subscriberCount: fetchedVideo.channel.subscriber_count,
        },
      }

      this.setState({
        videoDetails: updatedFetchedVideo,
        videoDetailsApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        videoDetailsApiStatus: apiStatusConstants.failure,
      })
    }
  }

  retryGetVideoItemDetails = () => {
    this.getVideoDetails()
  }

  renderVideoItemDetailsLoadingView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const loaderColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <div className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={loaderColor}
              height="50"
              width="50"
            />
          </div>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideoItemDetailsFailureView = () => (
    <FailureView retry={this.retryGetVideoItemDetails} />
  )

  renderVideoItemDetailsSuccessView = () => {
    const {videoDetails} = this.state
    return <VideoItemDetailsCard videoDetails={videoDetails} />
  }

  renderVideoItemDetailsView = () => {
    const {videoDetailsApiStatus} = this.state

    switch (videoDetailsApiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderVideoItemDetailsLoadingView()
      case apiStatusConstants.success:
        return this.renderVideoItemDetailsSuccessView()
      case apiStatusConstants.failure:
        return this.renderVideoItemDetailsFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <MainContainer>
              <Header />
              <SubContainer>
                <Sidebar />
                <VideoItemDetailsContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="videoItemDetails"
                >
                  <VideoItemDetailsResponsiveContainer>
                    {this.renderVideoItemDetailsView()}
                  </VideoItemDetailsResponsiveContainer>
                </VideoItemDetailsContainer>
              </SubContainer>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
