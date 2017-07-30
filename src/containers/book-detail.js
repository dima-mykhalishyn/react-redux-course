import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render () {
    if (!this.props.book) {
      return <div>Select book first...</div>
    }
    return (
      <div className="col-sm-6">
        <h3>Title: {this.props.book.title}</h3>
        <h5>Pages: {this.props.book.pages}</h5>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)