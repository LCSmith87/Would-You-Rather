import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {

    render() {
        return (
            <nav className='nav'>
                <ul>
                    <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                    </li>
                        {this.props.authedUser === null
                            ?   null
                            :   <li>
                                    <NavLink to='/logout' activeClassName='active'>
                                        Logout
                                    </NavLink>
                                </li>
                        }
                </ul>
            </nav>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Header)
