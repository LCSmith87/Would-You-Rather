import React from 'react'
import Btn from '../Btn/Btn'

const PollIntro = (props) => {
    const { optionOneText, id} = props
    return (
        <div>
            <p>{optionOneText} or...</p>
            <Btn to={`/question/${id}`}>
                View Poll
            </Btn>
        </div>
    )
}

export default PollIntro
