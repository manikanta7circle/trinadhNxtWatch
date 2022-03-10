import ReactPlayer from 'react-player'

import {VideoPlayerContainer} from './styledComponents'

const VideoPlayer = props => {
  const {videoUrl} = props
  return (
    <VideoPlayerContainer>
      <ReactPlayer url={videoUrl} controls width="100%" height="500px" />
    </VideoPlayerContainer>
  )
}

export default VideoPlayer
