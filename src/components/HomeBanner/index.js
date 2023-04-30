import {Component} from 'react'

import {RiCloseFill} from 'react-icons/ri'

import {
  HomeBannerCard,
  BannerCloseButton,
  BannerDetails,
  BannerImage,
  BannerHeading,
  BannerButton,
} from './styledComponent'

class HomeBanner extends Component {
  state = {
    showBanner: true,
  }

  onClickCloseBanner = () => {
    this.setState({showBanner: false})
  }

  renderBanner = () => (
    <HomeBannerCard data-testid="banner">
      <BannerCloseButton onClick={this.onClickCloseBanner} data-testid="close">
        <RiCloseFill />
      </BannerCloseButton>
      <BannerDetails>
        <BannerImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerHeading>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerHeading>
        <BannerButton>GET IT NOW</BannerButton>
      </BannerDetails>
    </HomeBannerCard>
  )

  render() {
    const {showBanner} = this.state

    return showBanner && this.renderBanner()
  }
}

export default HomeBanner
