import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../../actions/shared'
import { Redirect } from 'react-router-dom'


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
            <div>
                {this.state.redirect ? <Redirect to='/' /> : null}
                <h2>Create New Question</h2>
                <h3>Complete the question:</h3>
                <h4>Would you rather ...</h4>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        type="text"
                        value={this.state.optionOne}
                        placeholder="Enter option one text here..."
                        onChange={(e) => this.handleoptionOne(e)}
                    />
                    <hr /><span>OR</span><hr />
                    <input
                        type="text"
                        value={this.state.optionTwo}
                        placeholder="Enter option two text here..."
                        onChange={(e) => this.handleoptionTwo(e)}
                    />
                    <button disabled={disabled} >Submit</button>
                </form>
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
