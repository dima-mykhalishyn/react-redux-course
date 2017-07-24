import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchBar extends Component {

  constructor (props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  render () {
    return (
      <div className="search-bar">
        <input onChange={this.onInputChange.bind(this)}/>
      </div>
    )
  }

  onInputChange (event) {
    const term = event.target.value
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

SearchBar.propTypes = {
  onSearchTermChange: PropTypes.func.isRequired
}

export default SearchBar