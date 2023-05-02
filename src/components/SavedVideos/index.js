import {BiListPlus} from 'react-icons/bi'
import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  NoSavedVideosViewContainer,
  NoSavedVideosViewImage,
  NoSavedVideosViewHeading,
  NoSavedVideosViewCaption,
  SavedVideosListContainer,
  MainContainer,
  SubContainer,
  SavedVideosContainer,
  SavedVideosResponsiveContainer,
  SavedVideosBanner,
  BannerIconContainer,
  SavedVideosBannerHeading,
} from './styledComponent'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosList} = value

      const renderNoSavedVideosView = () => (
        <NoSavedVideosViewContainer>
          <NoSavedVideosViewImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedVideosViewHeading isDarkTheme={isDarkTheme}>
            No saved Videos Found
          </NoSavedVideosViewHeading>
          <NoSavedVideosViewCaption isDarkTheme={isDarkTheme}>
            You can save your videos while watching them.
          </NoSavedVideosViewCaption>
        </NoSavedVideosViewContainer>
      )

      const renderSavedVideosView = () => (
        <SavedVideosListContainer>
          {savedVideosList.map(eachVideo => (
            <TrendingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </SavedVideosListContainer>
      )

      const renderSavedVideosBanner = () => (
        <SavedVideosBanner isDarkTheme={isDarkTheme} data-testid="banner">
          <BannerIconContainer isDarkTheme={isDarkTheme}>
            <BiListPlus />
          </BannerIconContainer>
          <SavedVideosBannerHeading isDarkTheme={isDarkTheme}>
            Saved Videos
          </SavedVideosBannerHeading>
        </SavedVideosBanner>
      )

      const renderSavedVideos = () => {
        if (savedVideosList.length === 0) {
          return renderNoSavedVideosView()
        }
        return renderSavedVideosView()
      }

      return (
        <MainContainer>
          <Header />
          <SubContainer>
            <Sidebar />
            <SavedVideosContainer
              isDarkTheme={isDarkTheme}
              data-testid="savedVideos"
            >
              {savedVideosList.length > 0 && renderSavedVideosBanner()}
              <SavedVideosResponsiveContainer>
                {renderSavedVideos()}
              </SavedVideosResponsiveContainer>
            </SavedVideosContainer>
          </SubContainer>
        </MainContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
