import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HomeNoSearchResultContainer,
  NoSearchImage,
  NoSearchHeading,
  NoSearchCaption,
  RetryButton,
} from './styledComponent'

const HomeNoSearchResultView = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <HomeNoSearchResultContainer>
          <NoSearchImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <NoSearchHeading isDarkTheme={isDarkTheme}>
            No Search results found
          </NoSearchHeading>
          <NoSearchCaption isDarkTheme={isDarkTheme}>
            Try different key words or remove search filters
          </NoSearchCaption>
          <RetryButton type="button">Retry</RetryButton>
        </HomeNoSearchResultContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default HomeNoSearchResultView
