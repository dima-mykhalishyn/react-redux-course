import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST_BY_ID = 'FETCH_POST_BY_ID'
export const CREATE_POSTS = 'CREATE_POSTS'
export const DELETE_POST_BY_ID = 'DELETE_POST_BY_ID'

const API_KEY = '?key=201708module4'
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'

export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost (data, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, data).then(callback)
  return {
    type: CREATE_POSTS,
    payload: request
  }
}

export function fetchPostById (id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
  return {
    type: FETCH_POST_BY_ID,
    payload: request
  }
}

export function deletePostById (id, callback) {
  axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(callback)
  return {
    type: DELETE_POST_BY_ID,
    payload: id
  }
}