import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestions } from '../../actions/shared'

class Home extends Component {
    componentDidMount () {
        this.props.dispatch(handleQuestions())
    }
    render() {
        return (
            <div>
                Home
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