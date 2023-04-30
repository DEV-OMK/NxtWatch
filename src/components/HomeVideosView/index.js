import HomeVideoCard from '../HomeVideoCard'

import HomeVideosContainer from './styledComponent'

const HomeVideosView = props => {
  const {videos} = props
  return (
    <HomeVideosContainer>
      {videos.map(eachVideo => (
        <HomeVideoCard key={eachVideo.id} videoDetails={eachVideo} />
      ))}
    </HomeVideosContainer>
  )
}

export default HomeVideosView
