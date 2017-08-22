import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Promise from 'redux-promise'

import reducers from './reducers'
import PostIndex from './components/posts-index'
import PostNew from './components/posts-new'
import PostShow from './components/posts-show'

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostNew}/>
          <Route path="/posts/:id" component={PostShow}/>
          <Route path="/" component={PostIndex}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'))
