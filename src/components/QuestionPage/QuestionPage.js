import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPage extends Component {
    render() {
        const users = this.props.users
        const author = users[this.props.questions.author].name
        const avatar = users[this.props.questions.author].avatarURL
        const optionOneText = this.props.questions.optionOne.text
        const optionTwoText = this.props.questions.optionTwo.text
        return (
            <div>
                <div className="question">
                    <img src={avatar} alt={`${author}'s avatar`} />
                    <h2>{author} asks:</h2>
                    <h3>Would You Rather?</h3>
                    <p>{optionOneText} or... {optionTwoText}</p>
                    <button>Submit Answer</button>
                </div>
            </div>
        )
    }
}

function mapPropsToState({ authedUser, users, questions}, props) {
    const { id } = props.match.params

    return {
        id,
        users,
        authedUser,
        questions: !questions[id]
            ? []
            : questions[id]
    }
}

export default connect(mapPropsToState)(QuestionPage)
