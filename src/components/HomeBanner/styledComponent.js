import styled from 'styled-components'

export const HomeBannerCard = styled.div`
  width: 100%;
  padding: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const BannerCloseButton = styled.button`
  background-color: transparent;
  font-size: 25px;
  color: #313131;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0px;

  @media screen and (max-width: 767px) {
    align-self: flex-end;
  }
`

export const BannerDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const BannerImage = styled.img`
  width: 200px;
`

export const BannerHeading = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: normal;
  color: #424242;
  margin-bottom: 25px;
`

export const BannerButton = styled.button`
  color: #313131;
  font-weight: 700;
  background-color: transparent;
  border: 1px solid #0f0f0f;
  cursor: pointer;
  outline: none;
  padding: 10px;
  padding-inline: 20px;
`
