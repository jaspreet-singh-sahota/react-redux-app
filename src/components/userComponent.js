import React from 'react'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { fetchUser } from '../redux'

function UserComponent({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
        <div>
          <h2>Users List</h2>
          <div>
            {console.log(userData.data)}
            {
              userData.data.map(user => <p>{user.name}</p>)
            }
          </div>
        </div>

      )
}

const mapStateToProps = (state) => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)
