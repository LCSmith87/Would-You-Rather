import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionCard from '../QuestionCard/QuestionCard'
import Category from '../Category/Category'

class Home extends Component {
    state = {
        category: 'unanswered',
    }
    handleToggle = (category) => {
        this.setState({
            category
        })
    }
    render() {
        const { questions,
                questionsSorted,
                users,
                answeredQuestions } = this.props
         return (
            <div>
                <button
                    className={this.state.category === 'unanswered' ? "activeCategory" : ""}
                    onClick={() => this.handleToggle('unanswered')}>
                        Unanswered
                </button>
                <button
                    className={this.state.category === 'answered' ? "activeCategory" : ""}
                    onClick={() => this.handleToggle('answered')}>
                        Answered
                </button>
                {this.state.category === 'unanswered'
                    ? <Category title={"Unanswered"} >
                            {questionsSorted.map((question) => {
                                const user = users[questions[question].author];
                                return !answeredQuestions.includes(question)
                                    ?   <QuestionCard
                                            author={user}
                                            key={questions[question].id}
                                            question={questions[question]}
                                        />
                                    : null
                            })}
                        </Category>
                    :   <Category title={"Answered"} >
                            {questionsSorted.map((question) => {
                                const user = users[questions[question].author];
                                return answeredQuestions.includes(question)
                                    ?   <QuestionCard
                                            author={user}
                                            key={questions[question].id}
                                            question={questions[question]}
                                        />
                                    : null
                            })}
                        </Category>}

            </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }) {
    return {
        authedUser,
        questions,
        answeredQuestions: Object.keys(authedUser["answers"]),
        questionsSorted: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        users
    }
}

export default connect(mapStateToProps)(Home)