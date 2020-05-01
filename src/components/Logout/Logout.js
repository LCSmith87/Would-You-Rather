import React from 'react'
import { setAuthedUser } from '../../actions/authedUser'
import { connect } from 'react-redux'

const Logout = (props) => {
    const { dispatch } = props
    setTimeout(() => {
        dispatch(setAuthedUser(null))
    }, 1000)
    return (
        <div>
            Logging out...
        </div>
    )
}

export default connect()(Logout)
