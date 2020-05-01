import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Home)