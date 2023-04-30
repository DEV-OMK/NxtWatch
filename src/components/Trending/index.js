import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import TrendingVideoCard from '../TrendingVideoCard'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendingVideosContainer,
  MainContainer,
  SubContainer,
  TrendingContainer,
  TrendingResponsiveContainer,
  TrendingBanner,
  BannerIconContainer,
  TrendingBannerHeading,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingVideosApiStatus: apiStatusConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideosList()
  }

  retryGetTrendingVideosList = () => {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({
      trendingVideosApiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const trendingVideosUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingVideosUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      const fetchedVideos = fetchedData.videos
      const updatedFetchedVideos = fetchedVideos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
      }))

      this.setState({
        trendingVideosList: updatedFetchedVideos,
        trendingVideosApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        trendingVideosApiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderTrendingBanner = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <TrendingBanner isDarkTheme={isDarkTheme} data-testid="banner">
            <BannerIconContainer isDarkTheme={isDarkTheme}>
              <HiFire />
            </BannerIconContainer>
            <TrendingBannerHeading isDarkTheme={isDarkTheme}>
              Trending
            </TrendingBannerHeading>
          </TrendingBanner>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderTrendingSuccessView = () => {
    const {trendingVideosList} = this.state
    return (
      <TrendingVideosContainer>
        {trendingVideosList.map(eachVideo => (
          <TrendingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideosContainer>
    )
  }

  renderTrendingLoadingView = () => (
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

  renderTrendingFailureView = () => (
    <FailureView retry={this.retryGetTrendingVideosList} />
  )

  renderTrendingView = () => {
    const {trendingVideosApiStatus} = this.state

    switch (trendingVideosApiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderTrendingLoadingView()
      case apiStatusConstants.success:
        return this.renderTrendingSuccessView()
      case apiStatusConstants.failure:
        return this.renderTrendingFailureView()
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
                <TrendingContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="trending"
                >
                  {this.renderTrendingBanner()}
                  <TrendingResponsiveContainer>
                    {this.renderTrendingView()}
                  </TrendingResponsiveContainer>
                </TrendingContainer>
              </SubContainer>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
