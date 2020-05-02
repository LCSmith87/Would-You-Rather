import React from 'react'
import { connect } from 'react-redux'
import LeaderboardCard from '../LeaderboardCard/LeaderboardCard'

const Leaderboard = props => {
    const { users } = props
    return (
        <div>
            {Object.keys(users).map((user) => (
                <div key={users[user].id}>
                    <LeaderboardCard

                        avatar={users[user].avatarURL}
                        name={users[user].name}
                        created={users[user].questions.length}
                        answered={Object.size(users[user].answers)}
                    />
                </div>
            ))}
        </div>
    )
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


export default connect(mapStateToProps)(Leaderboard)
