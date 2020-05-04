import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class QuestionPage extends Component {
    state = {
        selectedOption: 'optionOne'
    }
    handleSubmit = (e) => {
        e.preventDefault()

        // todo: save answer
    }

    handleChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        }, () => {
            console.log(this.state.selectedOption)
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
        const author = users[this.props.questions.author].name
        const avatar = users[this.props.questions.author].avatarURL
        const optionOneText = this.props.questions.optionOne.text
        const optionTwoText = this.props.questions.optionTwo.text
        return (
            <div>
                <div className="question">
                    <div className="question-header">
                        <h2>{author} asks:</h2>
                    </div>
                    <div className="question-card">
                        <div className="question-card-left">
                            <img src={avatar} alt={`${author}'s avatar`} />
                        </div>
                    <div className="question-card-right">
                        <form>
                            <h3>Would You Rather?</h3>
                            <input
                                type="radio"
                                name="options"
                                id="optionOne"
                                value="optionOne"
                                onClick={(e) => this.handleChange(e)}
                            />
                            <label htmlFor="optionOne">{optionOneText}</label>
                            <input
                                type="radio"
                                name="options"
                                id="optionTwo"
                                value="optionTwo"
                                onClick={(e) => this.handleChange(e)}
                            />
                            <label htmlFor="optionTwo">{optionTwoText}</label>

                            <button>Submit Answer</button>
                        </form>
                    </div>
                    </div>
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
        answeredQuestions: Object.keys(authedUser["answers"]),
        questions: !questions[id]
            ? null
            : questions[id]
    }
}

export default connect(mapPropsToState)(QuestionPage)
