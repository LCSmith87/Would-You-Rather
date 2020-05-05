import React from 'react'
import './QuestionCard.css'

const QuestionCard = (props) => {
     const author = props.author.name
     const avatar = props.author.avatarURL
    return (
        <div className="question">
            <div className="question-header">
                <h2>{author} asks:</h2>
            </div>
            <div className="question-section">
                <div className="question-section-left">
                    <img className="question-avatar" src={avatar} alt={`${author}'s avatar`} />
                </div>
                <div className="question-section-right">
                    <h3>Would You Rather?</h3>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default QuestionCard
