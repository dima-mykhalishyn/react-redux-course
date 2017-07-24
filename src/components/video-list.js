import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VideoListItem from './video-list-item'

class VideoList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const  videoItems = this.props.videos.map(video => {
      return <VideoListItem key={video.etag}
                            video={video}
                            onVideoSelect={this.props.onVideoSelect}
      />
    })
    return (
      <ul className="col-md-4 list-group d-inline-block">
        {videoItems}
      </ul>
    )
  }
}

VideoListItem.propTypes = {
  videos: PropTypes.array.isRequired
}

export default VideoList