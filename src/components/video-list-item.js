import React from 'react'
import PropTypes from 'prop-types'

const VideoListItem = ({video, onVideoSelect}) => {
  const videoUrl = video.snippet.thumbnails.default.url
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <image className="media-object" src={videoUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

VideoListItem.propTypes = {
  video: PropTypes.object.isRequired,
  onVideoSelect: PropTypes.func.isRequired
}

export default VideoListItem