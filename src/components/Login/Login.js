import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../../actions/authedUser'

class Login extends Component {
    state = {
        selectedUserId: '',
    }
    handleChange = (e) => {
        console.log(e.target.value)
    }
    handleSubmit = (e) => {

    }
    render() {
        const { users } = this.props;
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