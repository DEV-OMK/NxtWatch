import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoItemDetailsContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoItemDetailsResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;

  @media screen and (min-width: 768px) {
    width: 90%;
  }
`
