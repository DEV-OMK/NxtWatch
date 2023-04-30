import Popup from 'reactjs-popup'
import {RiCloseFill} from 'react-icons/ri'

import MenuPopupField from '../MenuPopupField'
import NxtWatchContext from '../../context/NxtWatchContext'
import {PopupContainer, PopupCloseButton} from './styledComponent'

const MenuPopup = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {triggerField} = props

      return (
        <Popup modal trigger={triggerField}>
          {close => (
            <PopupContainer isDarkTheme={isDarkTheme}>
              <PopupCloseButton
                isDarkTheme={isDarkTheme}
                onClick={close}
                data-testid="close"
              >
                <RiCloseFill />
              </PopupCloseButton>
              <MenuPopupField />
            </PopupContainer>
          )}
        </Popup>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default MenuPopup
