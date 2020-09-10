import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userType"

export const featchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const featchUserSuccess = (user) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: user
  }
}

export const featchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}