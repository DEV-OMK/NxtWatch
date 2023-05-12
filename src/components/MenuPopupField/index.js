import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  MenuContainer,
  LinksContainer,
  LinkItem,
  IconContainer,
} from './styledComponent'

class MenuPopupField extends Component {
  state = {activeId: ''}

  componentDidMount() {
    this.setActiveId()
  }

  setActiveId = () => {
    const {location} = this.props

    switch (location.pathname) {
      case '/':
        this.setState({activeId: 'home'})
        break
      case '/trending':
        this.setState({activeId: 'trending'})
        break
      case '/gaming':
        this.setState({activeId: 'gaming'})
        break
      case '/saved-videos':
        this.setState({activeId: 'savedVideos'})
        break
      default:
        this.setState({activeId: ''})
        break
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {activeId} = this.state
          return (
            <MenuContainer isDarkTheme={isDarkTheme}>
              <LinksContainer>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <LinkItem
                    id="home"
                    isDarkTheme={isDarkTheme}
                    isActiveId={activeId === 'home'}
                    onClick={this.setActiveId}
                  >
                    <IconContainer
                      isDarkTheme={isDarkTheme}
                      isActiveId={activeId === 'home'}
                    >
                      <AiFillHome />
                    </IconContainer>
                    Home
                  </LinkItem>
                </Link>
                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <LinkItem
                    id="trending"
                    isActiveId={activeId === 'trending'}
                    isDarkTheme={isDarkTheme}
                    onClick={this.setActiveId}
                  >
                    <IconContainer
                      isDarkTheme={isDarkTheme}
                      isActiveId={activeId === 'trending'}
                    >
                      <HiFire />
                    </IconContainer>
                    Trending
                  </LinkItem>
                </Link>
                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  <LinkItem
                    id="gaming"
                    isActiveId={activeId === 'gaming'}
                    isDarkTheme={isDarkTheme}
                    onClick={this.setActiveId}
                  >
                    <IconContainer
                      isDarkTheme={isDarkTheme}
                      isActiveId={activeId === 'gaming'}
                    >
                      <SiYoutubegaming />
                    </IconContainer>
                    Gaming
                  </LinkItem>
                </Link>
                <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                  <LinkItem
                    id="savedVideos"
                    isActiveId={activeId === 'savedVideos'}
                    isDarkTheme={isDarkTheme}
                    onClick={this.setActiveId}
                  >
                    <IconContainer
                      isDarkTheme={isDarkTheme}
                      isActiveId={activeId === 'savedVideos'}
                    >
                      <BiListPlus />
                    </IconContainer>
                    Saved videos
                  </LinkItem>
                </Link>
              </LinksContainer>
            </MenuContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(MenuPopupField)
