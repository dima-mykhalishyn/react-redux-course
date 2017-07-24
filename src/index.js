import _ from 'lodash'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search-bar'
import VideoDetail from './components/video-detail'
import VideoList from './components/video-list'

const apiKey = 'AIzaSyBxJChtHEWfmVDoXFwDpF5zgcUErZly8_w'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('snowboarding')
  }

  videoSearch (term) {
    YTSearch({key: apiKey, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    const onSearchTermChange = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={onSearchTermChange} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    )
  }
}
ReactDom.render(<App />, document.querySelector('.container'))