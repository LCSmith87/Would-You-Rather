import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    state = {
        selectedUser: '',
        redirectToRefferrer: false,
        errorMessage: ''
    }
    handleChange = (e) => {
        this.setState({
            selectedUser: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // Check for no user selected
        if (this.state.selectedUser === 'none') {
            return this.setState({
                errorMessage: 'Please select a valid user'
            })
        } else {
            this.setState({
                errorMessage: ''
            })
        }
        const { dispatch, users } = this.props
        const user = users[this.state.selectedUser]

        dispatch(setAuthedUser(user))
        this.setState({
            redirectToRefferrer: true
        })

    }
    render() {
        const { users } = this.props;
        let { from } = this.props.location.state || { from: { pathname: '/' } }

        //Check for logout to preven redirect loop
        if(from.pathname === '/logout') {
            from = { from: { pathname: '/' } }
        }

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
                <span>{this.state.errorMessage}</span>
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