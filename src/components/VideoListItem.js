import React from 'react'

import './VideoListItem.css'

const VideoListItem = ({video, onVideoSelect}) => {

  const imageUrl = video.snippet.thumbnails.default.url

  return (
    <li className='list-group-item' onClick={() => onVideoSelect(video)}>
      <div className='video-list'>
        <div className='image-left'>
          <img src={imageUrl} className='img-responsive'/>
        </div>
        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>

  )
}

export default VideoListItem