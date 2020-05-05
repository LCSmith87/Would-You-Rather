import React from 'react'
import './ResultCard.css'

const ResultCard = (props) => {
    const { text,
        percentage,
        numVotes,
        totalVotes,
        active } = props
    return (
        <div className={active === true ? "result-card userVote-card" : "result-card"}>
            {active === true ? <div className="userVote-icon">Voted</div> : null}
            <div className="result-card-text">
                <h5>{text}</h5>
            </div>
            <div className="result-bar">
                <span>{`${percentage.toFixed(2)}%`}</span>
                <div style={{
                    content: "\A",
                    position: "absolute",
                    background: "rgba(20, 204, 96,0.5)",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: `${percentage.toFixed(2)}%`
                }}></div>
            </div>
            <div className="result-votes">
                <span>{`${numVotes} out of ${totalVotes} votes`}</span>
            </div>
        </div>
    )
}

export default ResultCard
