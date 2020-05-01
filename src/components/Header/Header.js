import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from './logo.png'
import './Header.css'

class Header extends Component {

    render() {
        const { authedUser } = this.props
        return (
            <header className="header">
                <div className="container">
                    <div>
                        <Link to="/"><img className="logo" src={logo} alt="Would You Rather? Logo" /></Link>
                    </div>
                    <nav className='nav'>
                        {authedUser === null
                            ? null
                            :   <div className="nav-content">
                                    <div>
                                        <ul className="nav-content-links">
                                            <li>
                                                <NavLink exact to='/' activeClassName='active'>
                                                    Home
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="nav-content-welcome">
                                        <span><img className="avatar" src={authedUser.avatarURL} alt={`${authedUser.name}'s Avatar`} /> {`Welcome, ${authedUser.name}`}</span>
                                    </div>
                                    <div>
                                        <ul className="nav-content-links">
                                            <li>
                                                <NavLink to='/logout' activeClassName='active'>
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>}
                    </nav>
                </div>
            </header>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Header)
