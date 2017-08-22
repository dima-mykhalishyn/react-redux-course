import _ from 'lodash'
import { FETCH_POSTS, CREATE_POSTS, FETCH_POST_BY_ID, DELETE_POST_BY_ID } from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
    case CREATE_POSTS:
    case FETCH_POST_BY_ID:
      return {...state, [action.payload.data.id]: action.payload.data}
    case DELETE_POST_BY_ID:
      return _.omit(state, action.payload)
    default:
      return state
  }
}