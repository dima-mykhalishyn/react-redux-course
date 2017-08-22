import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPostById, deletePostById } from '../actions'

class PostsShow extends Component {
  componentDidMount () {
    this.props.fetchPostById(this.props.match.params.id)
  }

  deletePost () {
    this.props.deletePostById(this.props.match.params.id, () => {
      this.props.history.push('/')
    })
  }

  render () {
    const {post} = this.props
    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <div>
          <Link className="btn btn-primary" to="/">Back to Index</Link>
          <button className="btn btn-danger float-sm-right" onClick={this.deletePost.bind(this)}>
            Delete
          </button>
        </div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps ({posts}, ownProps) {
  return {post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPostById, deletePostById})(PostsShow)