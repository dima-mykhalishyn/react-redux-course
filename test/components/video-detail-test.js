import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import VideoDetail from '../../src/components/video-detail'

describe('<VideoDetail>', function () {
  it('should have an iframe for the video and details', function () {
    const video = {
      id: {videoId: 1},
      snippet: {title:"Test", description: "Desc"}
    }
    const wrapper = shallow(<VideoDetail video={video}/>)
    expect(wrapper.find('.video-detail iframe')).to.have.length(1)
    expect(wrapper.find('.video-detail .details')).to.have.length(1)
  })

  it('should have props for video', function () {
    const wrapper = shallow(<VideoDetail/>)
    expect(wrapper.props().video).to.be.defined
  })
})