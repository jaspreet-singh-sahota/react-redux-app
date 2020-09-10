import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userType"
import axios from 'axios'

export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: user
  }
}

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest)
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const userData = response.data
      dispatch(fetchUserSuccess(userData))
    })
    .catch(error => {
      const errorMessage = error.message
      dispatch(fetchUserFailure(errorMessage))
    })

  }
}

