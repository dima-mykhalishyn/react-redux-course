import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import VideoListItem from '../../src/components/video-list-item'

describe('<VideoListItem>', function () {
  const video = {
    snippet: {thumbnails: {default: {url: 'test'}}}
  }
  it('should have an image and description for the video', function () {
    const wrapper = shallow(<VideoListItem video={video}/>)
    expect(wrapper.find('.list-group-item')).to.have.length(1)
  })

  it('should have props for video and onVideoSelect', function () {
    const wrapper = shallow(<VideoListItem video={video}/>)
    expect(wrapper.props().video).to.be.defined
    expect(wrapper.props().onVideoSelect).to.be.defined
  })
})