import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../../actions/authedUser'
import { Redirect } from 'react-router-dom'
import SignInCard from '../SignInCard/SignInCard'
import "./Login.css"

class Login extends Component {
    state = {
        selectedUser: 'none',
        selectedUserImage: '',
        redirectToRefferrer: false,
        errorMessage: ''
    }
    handleChange = (e) => {
        const { users } = this.props

        // Check for an avatar and display it if there is one
        const userImg = e.target.value !== 'none' ? users[e.target.value].avatarURL : null
        this.setState({
            selectedUser: e.target.value,
            selectedUserImage: userImg,
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

        // Set the user to an object to match from the users data
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
                <div className="container">
                    <SignInCard cardImage={this.state.selectedUserImage} >
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <div className="login">
                                <select className="sign-in-select" onChange={(e) => this.handleChange(e)} id="users">
                                    <option value="none">Please select a user...</option>
                                    {Object.keys(users).map((user) => (
                                        <option className="sign-in-select-option" value={users[user].id} key={users[user].id}>
                                            {users[user].name}
                                        </option>
                                    ))}
                                </select>
                                <button className="sign-in-btn">Login</button>
                                </div>
                            </form>
                            <div className="login-error"><span>{this.state.errorMessage}</span></div>
                    </SignInCard>
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