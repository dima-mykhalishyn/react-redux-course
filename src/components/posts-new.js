import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost} from '../actions'

class PostsNew extends Component {

  renderField (field) {
    const {meta: {touched, error}} = field
    const style = `form-group form-inline col-sm-12 ${touched && error ? 'text-danger' : ''}`
    return (
      <div className={style}>
        <label className="col-sm-2">{field.label}</label>
        <input className="form-control col-sm-6" type="text" {...field.input} />
        <div className="text-help col-sm-4">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit (values) {
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }

  render () {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" label="Title" component={this.renderField}/>
        <Field name="categories" label="Categories" component={this.renderField}/>
        <Field name="content" label="Post content" component={this.renderField}/>
        <div className="form-buttons-group">
          <button type="submit" className="btn btn-primary">Save</button>
          <Link className="btn btn-danger" to="/">
            Cancel
          </Link>
        </div>
      </form>
    )
  }
}

function validate (values) {
  const errors = {}
  if (!values.title) {
    errors.title = 'Enter a title'
  }
  if (!values.categories) {
    errors.categories = 'Enter a coma separated categories'
  }
  if (!values.content) {
    errors.content = 'Enter a content'
  }
  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
)