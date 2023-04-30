import Header from '../Header'
import Sidebar from '../Sidebar'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  MainContainer,
  SubContainer,
  NotFoundContainer,
  NotFoundResponsiveContainer,
  NotFoundViewContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundCaption,
} from './styledComponent'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const renderNotFoundView = () => (
        <NotFoundViewContainer>
          <NotFoundImage src={notFoundImageUrl} alt="not found" />
          <NotFoundHeading isDarkTheme={isDarkTheme}>
            Page Not Found
          </NotFoundHeading>
          <NotFoundCaption isDarkTheme={isDarkTheme}>
            We are sorry, the page you requested could not be found.
          </NotFoundCaption>
        </NotFoundViewContainer>
      )

      return (
        <MainContainer>
          <Header />
          <SubContainer>
            <Sidebar />
            <NotFoundContainer
              isDarkTheme={isDarkTheme}
              data-testid="not found"
            >
              <NotFoundResponsiveContainer>
                {renderNotFoundView()}
              </NotFoundResponsiveContainer>
            </NotFoundContainer>
          </SubContainer>
        </MainContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
