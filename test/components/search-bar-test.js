import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import SearchBar from '../../src/components/search-bar'


describe('<SearchBar>', function () {
  it('should have an input for the search', function () {
    const wrapper = shallow(<SearchBar/>);
    expect(wrapper.find('.search-bar input')).to.have.length(1);
  });

  it('should have props for onSearchTermChange', function () {
    const wrapper = shallow(<SearchBar/>);
    expect(wrapper.props().onSearchTermChange).to.be.defined;
  });
});