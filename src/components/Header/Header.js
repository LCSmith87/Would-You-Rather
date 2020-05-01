import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {

    render() {
        return (
            <nav className='nav'>
                <ul>
                    <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/logout' activeClassName='active'>
                        Logout
                    </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}
