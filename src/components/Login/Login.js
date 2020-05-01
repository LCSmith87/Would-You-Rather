import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    state = {
        selectedUserId: '',
        redirectToRefferrer: false
    }
    handleChange = (e) => {
        this.setState({
            selectedUserId: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch } = this.props
        dispatch(setAuthedUser(this.state.selectedUserId))
        this.setState({
            redirectToRefferrer: true
        })
    }
    render() {
        const { users } = this.props;
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        if (this.state.redirectToRefferrer === true) {
            return <Redirect to={from} />
        }
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <select onChange={(e) => this.handleChange(e)} id="users">
                        <option value="none">---</option>
                        {Object.keys(users).map((user) => (
                            <option value={users[user].id} key={users[user].id}>
                                {users[user].name}
                            </option>
                        ))}
                    </select>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users }) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Login)