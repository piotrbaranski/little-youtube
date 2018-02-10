import React from 'react'
import VideoListItem from './VideoListItem'

import './VideoList.css'

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        video={video}
        key={video.etag}
        onVideoSelect={props.onVideoSelect}/>
    )
  })

  return (
    <ul>
      {videoItems}
    </ul>
  )
}

export default VideoList