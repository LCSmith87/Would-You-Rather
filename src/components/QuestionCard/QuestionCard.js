import React from 'react'

const QuestionCard = (props) => {
     const optionOneText = props.question.optionOne.text
     const author = props.author
    return (
        <div className="question">
            <h2>{author} asks:</h2>
            <h3>Would You Rather?</h3>
            <p>{optionOneText} or...</p>
            <button>View Poll</button>
        </div>
    )
}

export default QuestionCard
