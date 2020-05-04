import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const AnswerPage = (props) => {
    const users = props.users

    // Check for a valid question and redirect if not found
    if(!props.questions) {
        return <Redirect to="/404" />
    }
    // Check to make sure the user has answered the question to see the result
    if(!props.authedUser.answers[props.id]) {
        return <Redirect to="/404" />
    }
    const userVote = users[props.authedUser.id].answers[props.id]
    const author = users[props.questions.author].name
    const avatar = users[props.questions.author].avatarURL
    const optionOneText = props.questions.optionOne.text
    const optionOneVotes = props.questions.optionOne.votes.length
    const optionTwoText = props.questions.optionTwo.text
    const optionTwoVotes = props.questions.optionTwo.votes.length

    return (
        <div>
            <div className="question">
                <img src={avatar} alt={`${author}'s avatar`} />
                <h2>{author} asks:</h2>
                <h3>Would You Rather?</h3>
                <p>{userVote === "optionOne" ? "userVote" : ""} : {optionOneText}</p>
                <p>{`${optionOneVotes / (optionOneVotes + optionTwoVotes) * 100}%`}</p>
                <p>{`${optionOneVotes} out of ${optionOneVotes + optionTwoVotes} votes`}</p>
                <p>{userVote === "optionTwo" ? "userVote" : ""} : {optionTwoText}</p>
                <p>{`${optionTwoVotes / (optionOneVotes + optionTwoVotes)  * 100}%`}</p>
                <p>{`${optionTwoVotes} out of ${optionOneVotes + optionTwoVotes} votes`}</p>
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
