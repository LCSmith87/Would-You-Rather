import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const AnswerPage = (props) => {
    // Check for a valid question and redirect if not found
    if(!props.questions) {
        return <Redirect to="/404" />
    }
    const users = props.users
    const author = users[props.questions.author].name
    const avatar = users[props.questions.author].avatarURL
    const optionOneText = props.questions.optionOne.text
    const optionTwoText = props.questions.optionTwo.text
    return (
        <div>
            <div className="question">
                <img src={avatar} alt={`${author}'s avatar`} />
                <h2>{author} asks:</h2>
                <h3>Would You Rather?</h3>
                <p>{optionOneText} or... {optionTwoText}</p>
            </div>
        </div>
    )
}

function mapPropsToState({ authedUser, users, questions}, props) {
    const { id } = props.match.params

    return {
        id,
        users,
        authedUser,
        questions: !questions[id]
            ? null
            : questions[id]
    }
}
export default connect(mapPropsToState)(AnswerPage)
