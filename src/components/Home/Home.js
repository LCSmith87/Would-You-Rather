import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionCard from '../QuestionCard/QuestionCard'

class Home extends Component {
    render() {
        const { questions, questionsSorted, users } = this.props
        return (
            <div>
                {questionsSorted.map((question) => {
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
        questionsSorted: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        users
    }
}

export default connect(mapStateToProps)(Home)