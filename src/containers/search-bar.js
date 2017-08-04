import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {

  constructor (props) {
    super(props)
    this.state = {term: ''}
    this.onTermChange = this.onTermChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onTermChange (event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit (event) {
    event.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input className="form-control" placeholder="Get 5 days forecast in the city"
               value={this.state.term}
               onChange={this.onTermChange}/>
        <span className="input-group-btn">
          <input type="submit" className="btn btn-secondary" value="Submit"/>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)