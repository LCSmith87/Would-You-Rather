import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../../actions/questions'
import { Redirect } from 'react-router-dom'
import Btn from '../Btn/Btn'
import './NewQuestion.css'


class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        redirect: false
    }
    handleoptionOne = (e) => {
        this.setState({
            optionOne: e.target.value,
        })
    }
    handleoptionTwo = (e) => {
        this.setState({
            optionTwo: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch } = this.props

        const question = {
            optionOneText: this.state.optionOne,
            optionTwoText: this.state.optionTwo,
            author: this.props.authedUser.id
        }
        this.setState({
            optionOne: '',
            optionTwo: ''
        })

        dispatch(handleAddQuestion(question))

        .then(() => {
            this.setState({
                redirect: true,
            })
        })


    }
    render() {
        const disabled = this.state.optionOne && this.state.optionTwo ? false : true
        return (
            <div className="new-question container">
                {this.state.redirect ? <Redirect to='/' /> : null}
                <div className="new-question-header">
                    <h2>Create New Question</h2>
                </div>
                <div className="new-question-section">
                <h3>Complete the question:</h3>
                <h4>Would you rather ...</h4>
                    <form className="new-question-form" onSubmit={(e) => this.handleSubmit(e)}>
                        <input
                            type="text"
                            value={this.state.optionOne}
                            placeholder="Enter option one text here..."
                            onChange={(e) => this.handleoptionOne(e)}
                        />
                        <h5>OR</h5>
                        <input
                            type="text"
                            value={this.state.optionTwo}
                            placeholder="Enter option two text here..."
                            onChange={(e) => this.handleoptionTwo(e)}
                        />
                        <div className="new-question-btn">
                            <Btn disabled={disabled}>Submit</Btn>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)
