import React from 'react'
import { Link } from 'react-router-dom'

const QuestionCard = (props) => {
     const optionOneText = props.question.optionOne.text
     const author = props.author
     const id = props.question.id
    return (
        <div className="question">
            <h2>{author} asks:</h2>
            <h3>Would You Rather?</h3>
            <p>{optionOneText} or...</p>
            <Link to={`/question/${id}`} ><button>View Poll</button></Link>
        </div>
    )
}

export default QuestionCard
