import React from 'react'

import './VideoDetail.css'

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId
  const url = 'https://www.youtube.com/embed/' + videoId

  return (
    <div className='video-detail'>
      <div className='embed-responsive'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail