import NxtWatchContext from '../../context/NxtWatchContext'

import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewCaption,
  RetryButton,
} from './styledComponent'

const FailureView = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {retry} = props
      const failureViewImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

      const onClickRetry = () => {
        retry()
      }

      return (
        <FailureViewContainer>
          <FailureViewImage src={failureViewImageUrl} alt="failure view" />
          <FailureViewHeading isDarkTheme={isDarkTheme}>
            Oops! Something Went Wrong
          </FailureViewHeading>
          <FailureViewCaption isDarkTheme={isDarkTheme}>
            We are having some trouble to complete your request. Please try
            again.
          </FailureViewCaption>
          <RetryButton type="button" onClick={onClickRetry}>
            Retry
          </RetryButton>
        </FailureViewContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default FailureView
