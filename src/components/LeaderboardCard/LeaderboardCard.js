import React from 'react'

const LeaderboardCard = (props) => {
    return (
        <div>
            <li>{props.name}</li>
            <li>{props.answered}</li>
            <li>{props.created}</li>
            <li> {props.avatar}</li>
            <li>{parseInt(props.answered) + parseInt(props.created)}</li>
        </div>
    )
}

export default LeaderboardCard
