import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {HiMoon, HiSun} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
import {GoThreeBars} from 'react-icons/go'
import {
  Navbar,
  LogoButton,
  LogoImage,
  ButtonsContainerSm,
  ButtonsContainerLg,
  ThemeButton,
  ProfileButtonSm,
  ProfileButtonLg,
  ProfileImage,
  LogoutButtonSm,
  LogoutButtonLg,
} from './styledComponent'

import LogoutPopup from '../LogoutPopup'
import MenuPopup from '../MenuPopup'

import NxtWatchContext from '../../context/NxtWatchContext'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <Navbar isDarkTheme={isDarkTheme}>
          <LogoButton>
            <Link to="/">
              <LogoImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
          </LogoButton>
          <ButtonsContainerSm>
            <ThemeButton
              type="button"
              onClick={onClickTheme}
              isDarkTheme={isDarkTheme}
              data-testid="theme"
            >
              {isDarkTheme && <HiSun />}
              {!isDarkTheme && <HiMoon />}
            </ThemeButton>
            <MenuPopup
              triggerField={
                <ProfileButtonSm type="button" isDarkTheme={isDarkTheme}>
                  <GoThreeBars />
                </ProfileButtonSm>
              }
            />
            <LogoutPopup
              triggerField={
                <LogoutButtonSm type="button" isDarkTheme={isDarkTheme}>
                  <FiLogOut />
                </LogoutButtonSm>
              }
              logout={onClickLogout}
            />
          </ButtonsContainerSm>
          <ButtonsContainerLg>
            <ThemeButton
              type="button"
              isDarkTheme={isDarkTheme}
              onClick={onClickTheme}
              data-testid="theme"
            >
              {isDarkTheme && <HiSun />}
              {!isDarkTheme && <HiMoon />}
            </ThemeButton>
            <ProfileButtonLg type="button">
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ProfileButtonLg>
            <LogoutPopup
              triggerField={
                <LogoutButtonLg type="button">Logout</LogoutButtonLg>
              }
              logout={onClickLogout}
            />
          </ButtonsContainerLg>
        </Navbar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
