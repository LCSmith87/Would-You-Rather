import React from 'react'
import './LeaderboardCard.css'

const LeaderboardCard = (props) => {
    return (
        <div className="leaderboard-card">
            <div className="leaderboard-card-avatar">
                <img src={props.avatar} alt={`${props.name}'s avatar`} />
            </div>
            <div className="leaderboard-card-middle">
                <h3>{props.name}</h3>
                <div className="leaderboard-card-questions">
                    <h4>Answered questions</h4>
                    <span>{props.answered}</span>
                </div>
                <div className="leaderboard-card-questions">
                    <h4>Created questions</h4>
                    <span>{props.created}</span>
                </div>
            </div>
            <div className="leaderboard-card-right">
                <div className="leaderboard-score-card">
                    <div className="leaderboard-score-card-header">
                        <h4>Score</h4>
                    </div>
                    <div className="leaderboard-card-score">{parseInt(props.answered) + parseInt(props.created)}</div>
                </div>
            </div>
        </div>
    )
}

export default LeaderboardCard
