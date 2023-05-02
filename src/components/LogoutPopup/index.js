import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  PopupCard,
  PopupText,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponent'

const LogoutPopup = props => {
  const {triggerField, logout} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Popup modal trigger={triggerField} className="popup-content">
            {close => (
              <PopupCard isDarkTheme={isDarkTheme}>
                <PopupText isDarkTheme={isDarkTheme}>
                  Are you sure, you want to logout
                </PopupText>
                <ButtonsContainer>
                  <CancelButton type="button" onClick={close}>
                    Cancel
                  </CancelButton>
                  <ConfirmButton type="button" onClick={logout}>
                    Confirm
                  </ConfirmButton>
                </ButtonsContainer>
              </PopupCard>
            )}
          </Popup>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default LogoutPopup
