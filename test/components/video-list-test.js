import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import VideoList from '../../src/components/video-list'

describe('<VideoList>', function () {
  it('should have an ul for the videos', function () {
    const videos = []
    const wrapper = shallow(<VideoList videos={videos} />)
    expect(wrapper.find('ul')).to.have.length(1)
  })

  it('should have props for videos', function () {
    const videos = []
    const wrapper = shallow(<VideoList videos={videos} />)
    expect(wrapper.props().videos).to.be.defined
  })
})