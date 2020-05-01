import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Login extends Component {
    render() {
        const { users } = this.props;
        return (
            <div>
                <form>
                    <select id="users">
                        <option value="none">---</option>
                        {Object.keys(users).map((user) => (
                            <option value={users[user].id} key={users[user].id}>
                                {users[user].name}
                            </option>
                        ))}
                    </select>
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