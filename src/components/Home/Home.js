import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionCard from '../QuestionCard/QuestionCard'
import Category from '../Category/Category'
import PollIntro from '../PollIntro/PollIntro'
import './Home.css'

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
            <div className="home container">
                <div className="categories">
                    <div className="category-header">
                        <button
                            className={this.state.category === 'unanswered' ? "category activeCategory" : "category"}
                            onClick={() => this.handleToggle('unanswered')}>
                                Unanswered
                        </button>
                        <button
                            className={this.state.category === 'answered' ? "category activeCategory" : "category"}
                            onClick={() => this.handleToggle('answered')}>
                                Answered
                        </button>
                    </div>
                    <div className="categories-section">
                    {this.state.category === 'unanswered'
                        ? <Category title={"Unanswered"} >
                                {questionsSorted.map((question) => {
                                    const user = users[questions[question].author];
                                    return !answeredQuestions.includes(question)
                                        ?   <QuestionCard
                                                author={user}
                                                key={questions[question].id}
                                            >
                                                <PollIntro
                                                    id={questions[question].id}
                                                    optionOneText={questions[question].optionOne.text}
                                                />
                                            </QuestionCard>
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
                                            >
                                                <PollIntro
                                                    id={questions[question].id}
                                                    optionOneText={questions[question].optionOne.text}
                                                />
                                            </QuestionCard>
                                        : null
                                })}
                            </Category>}
                    </div>
                </div>
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