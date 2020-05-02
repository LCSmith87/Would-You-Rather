import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestions } from '../../actions/shared'
import QuestionCard from '../QuestionCard/QuestionCard'

class Home extends Component {
    componentDidMount () {
        this.props.dispatch(handleQuestions())
    }
    render() {
        const { questions, users } = this.props
        return (
            <div>
                {Object.keys(questions).map((question) => {
                    const user = users[questions[question].author];
                    return (
                        <QuestionCard author={user} key={questions[question].id} question={questions[question]} />
                    )
                    })}
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }) {
    return {
        authedUser,
        questions,
        users
    }
}

export default connect(mapStateToProps)(Home)