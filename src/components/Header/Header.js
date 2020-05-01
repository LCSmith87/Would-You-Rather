import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from './logo.png'
import './Header.css'
import { GiExitDoor } from 'react-icons/gi'

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
                            :   <React.Fragment>
                                    <div className="nav-content">
                                        <div>
                                            <ul className="nav-content-links">
                                                <li>
                                                    <NavLink exact to='/' activeClassName='active'>
                                                        Home
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/add' activeClassName='active'>
                                                        New Question
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/leaderboard' activeClassName='active'>
                                                        Leaderboard
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/logout' activeClassName='active'>
                                                        <GiExitDoor /> Logout
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="nav-content-welcome">
                                        <span><img className="avatar" src={authedUser.avatarURL} alt={`${authedUser.name}'s Avatar`} /> {authedUser.name}</span>
                                    </div>
                                </React.Fragment>}
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
