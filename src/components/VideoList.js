import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} key={video.etag}/>
  })

  return (
    <ul>
      {videoItems}
    </ul>
  )
}

export default VideoList