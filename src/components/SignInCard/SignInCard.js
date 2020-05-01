import React from 'react'
import logo from '../Header/logo.png'
import "./SignInCard.css"

const SignInCard = (props) => {
    return (
        <div className="sign-in-card">
            <header>
                <h2>Welcome to the Would You Rather? App!</h2>
                <h3>Please sign in to continue</h3>
            </header>
            <div className="sign-in-section">
                <div className="logo">
                    <img src={logo} alt="Would You Rather? Logo" />
                </div>
                <div className="sign-in-children">
                    <div className="sign-in-children-img">
                        {props.cardImage ? <img className="sign-in-children-avatar" src={props.cardImage} alt="Avatar" /> : null }
                    </div>
                    <p className="sign-in-children-title">Sign in</p>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default SignInCard
