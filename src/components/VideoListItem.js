import React from 'react'

import './VideoListItem.css'

const VideoListItem = ({video}) => {

  const imageUrl = video.snippet.thumbnails.default.url

  return (
    <div>
      <div className='video-list'>
        <div className='image-left'>
          <img src={imageUrl} className='img-responsive'/>
        </div>
        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </div>

  )
}

export default VideoListItem