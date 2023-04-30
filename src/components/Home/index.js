import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiSearch} from 'react-icons/bi'

import Header from '../Header'
import Sidebar from '../Sidebar'
import HomeBanner from '../HomeBanner'
import HomeVideosView from '../HomeVideosView'
import HomeNoSearchResultView from '../HomeNoSearchResultView'
import FailureView from '../FailureView'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SearchBar,
  UserInput,
  SearchIconButton,
  MainContainer,
  SubContainer,
  HomeContainer,
  HomeResponsiveContainer,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchInput: '',
    homeVideosApiStatus: apiStatusConstants.initial,
    homeVideosList: [],
  }

  componentDidMount() {
    this.getHomeVideosList()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    this.getHomeVideosList()
  }

  retryGetHomeVideosList = () => {
    this.getHomeVideosList()
  }

  getHomeVideosList = async () => {
    this.setState({
      homeVideosApiStatus: apiStatusConstants.inProgress,
    })
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const homeVideosUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeVideosUrl, options)

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
        homeVideosList: updatedFetchedVideos,
        homeVideosApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        homeVideosApiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSearchBar = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {searchInput} = this.state
        return (
          <SearchBar>
            <UserInput
              type="search"
              value={searchInput}
              placeholder="Search"
              onChange={this.onChangeSearchInput}
              isDarkTheme={isDarkTheme}
            />
            <SearchIconButton
              type="button"
              onClick={this.onClickSearchButton}
              isDarkTheme={isDarkTheme}
              data-testid="searchButton"
            >
              <BiSearch />
            </SearchIconButton>
          </SearchBar>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderHomeSuccessView = () => {
    const {homeVideosList} = this.state
    if (homeVideosList.length === 0) {
      return <HomeNoSearchResultView />
    }
    return <HomeVideosView videos={homeVideosList} />
  }

  renderHomeLoadingView = () => (
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

  renderHomeFailureView = () => (
    <FailureView retry={this.retryGetHomeVideosList} />
  )

  renderHomeView = () => {
    const {homeVideosApiStatus} = this.state

    switch (homeVideosApiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderHomeLoadingView()
      case apiStatusConstants.success:
        return this.renderHomeSuccessView()
      case apiStatusConstants.failure:
        return this.renderHomeFailureView()
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
                <HomeContainer isDarkTheme={isDarkTheme} data-testid="home">
                  <HomeBanner />
                  <HomeResponsiveContainer>
                    {this.renderSearchBar()}
                    {this.renderHomeView()}
                  </HomeResponsiveContainer>
                </HomeContainer>
              </SubContainer>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
