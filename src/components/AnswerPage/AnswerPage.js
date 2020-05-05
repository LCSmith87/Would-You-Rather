import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import QuestionCard from '../QuestionCard/QuestionCard'
import ResultCard from '../ResultCard/ResultCard'
import './AnswerPage.css'

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
    const author = users[props.questions.author]
    const optionOneText = props.questions.optionOne.text
    const optionOneVotes = props.questions.optionOne.votes.length
    const optionTwoText = props.questions.optionTwo.text
    const optionTwoVotes = props.questions.optionTwo.votes.length
    const optionOnePerc = (optionOneVotes / (optionOneVotes + optionTwoVotes)) * 100
    const optionTwoPerc = (optionTwoVotes / (optionOneVotes + optionTwoVotes)) * 100
    const totalVotes = optionOneVotes + optionTwoVotes

    return (
        <div className="results container">
            <QuestionCard
                author={author}
            >
                <h4>Results</h4>
                <ResultCard
                    text={optionOneText}
                    percentage={optionOnePerc}
                    numVotes={optionOneVotes}
                    totalVotes={totalVotes}
                    active={userVote === "optionOne" ? true : false}
                />
                <ResultCard
                    text={optionTwoText}
                    percentage={optionTwoPerc}
                    numVotes={optionTwoVotes}
                    totalVotes={totalVotes}
                    active={userVote === "optionTwo" ? true : false}
                />
            </QuestionCard>
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
