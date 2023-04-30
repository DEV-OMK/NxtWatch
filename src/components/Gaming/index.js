import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import GamingVideoCard from '../GamingVideoCard'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  GamingVideosContainer,
  MainContainer,
  SubContainer,
  GamingContainer,
  GamingResponsiveContainer,
  GamingBanner,
  BannerIconContainer,
  GamingBannerHeading,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingVideosApiStatus: apiStatusConstants.initial,
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideosList()
  }

  retryGetGamingVideosList = () => {
    this.getGamingVideosList()
  }

  getGamingVideosList = async () => {
    this.setState({
      gamingVideosApiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const gamingVideosUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingVideosUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      const fetchedVideos = fetchedData.videos
      const updatedFetchedVideos = fetchedVideos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        gamingVideosList: updatedFetchedVideos,
        gamingVideosApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        gamingVideosApiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderGamingBanner = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <GamingBanner isDarkTheme={isDarkTheme} data-testid="banner">
            <BannerIconContainer isDarkTheme={isDarkTheme}>
              <SiYoutubegaming />
            </BannerIconContainer>
            <GamingBannerHeading isDarkTheme={isDarkTheme}>
              Gaming
            </GamingBannerHeading>
          </GamingBanner>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderGamingSuccessView = () => {
    const {gamingVideosList} = this.state
    return (
      <GamingVideosContainer>
        {gamingVideosList.map(eachVideo => (
          <GamingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </GamingVideosContainer>
    )
  }

  renderGamingLoadingView = () => (
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

  renderGamingFailureView = () => (
    <FailureView retry={this.retryGetGamingVideosList} />
  )

  renderGamingView = () => {
    const {gamingVideosApiStatus} = this.state

    switch (gamingVideosApiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderGamingLoadingView()
      case apiStatusConstants.success:
        return this.renderGamingSuccessView()
      case apiStatusConstants.failure:
        return this.renderGamingFailureView()
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
                <GamingContainer isDarkTheme={isDarkTheme} data-testid="gaming">
                  {this.renderGamingBanner()}
                  <GamingResponsiveContainer>
                    {this.renderGamingView()}
                  </GamingResponsiveContainer>
                </GamingContainer>
              </SubContainer>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
