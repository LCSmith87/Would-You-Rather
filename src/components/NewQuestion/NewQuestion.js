import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
    }
    handleoptionOne = (e) => {
        this.setState({
            optionOne: e.target.value
        })
    }
    handleoptionTwo = (e) => {
        this.setState({
            optionTwo: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.setState({
            optionOne: '',
            optionTwo: '',
        })
    }
    render() {
        return (
            <div>
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
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion)
