import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { handleSaveAnswer } from '../../actions/questions'
import QuestionCard from '../QuestionCard/QuestionCard'
import Btn from '../Btn/Btn'
import './QuestionPage.css'

class QuestionPage extends Component {
    state = {
        selectedOption: 'optionOne'
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(handleSaveAnswer(this.props.questions, this.state.selectedOption))
    }

    handleChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }
    render() {

        // Check for a valid question and redirect if not found
        if(!this.props.questions) {
            return <Redirect to="/404" />
         }

         const id = this.props.id

         if(this.props.answeredQuestions.includes(id)) {
            return <Redirect to={`/question/${id}/result`} />
         }
        const users = this.props.users
        const author = users[this.props.questions.author]
        const optionOneText = this.props.questions.optionOne.text
        const optionTwoText = this.props.questions.optionTwo.text
        return (
            <div className="question-page container">
                <QuestionCard
                    author={author}
                >
                    <form className="question-form" onSubmit={(e) => this.handleSubmit(e)}>
                        <div>
                            <input
                                type="radio"
                                name="options"
                                id="optionOne"
                                value="optionOne"
                                onClick={(e) => this.handleChange(e)}
                            />
                            <label htmlFor="optionOne">{optionOneText}</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="options"
                                id="optionTwo"
                                value="optionTwo"
                                onClick={(e) => this.handleChange(e)}
                            />
                            <label htmlFor="optionTwo">{optionTwoText}</label>
                        </div>
                        <div className="question-submit">
                            <Btn>Submit Answer</Btn>
                        </div>
                    </form>
                </QuestionCard>
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
        answeredQuestions: Object.keys(authedUser["answers"]),
        questions: !questions[id]
            ? null
            : questions[id]
    }
}

export default connect(mapPropsToState)(QuestionPage)
