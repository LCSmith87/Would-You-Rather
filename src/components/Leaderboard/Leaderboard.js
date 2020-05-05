import React from 'react'
import { connect } from 'react-redux'
import LeaderboardCard from '../LeaderboardCard/LeaderboardCard'
import './Leaderboard.css'


const Leaderboard = (props) => {
    const { users }  = props
    // Convert the object to an array
    const usersArray = Object.keys(users).map((key) => {
        return [key, users[key]]
    })
    // Sort the array by the combined score of questions/answers
    const usersArraySorted = usersArray.sort((a,b) => {
        return (b[1].questions.length + Object.size(b[1].answers)) - (a[1].questions.length + Object.size(a[1].answers))
    })
    return (
        <div className="leaderboard-page container">
        {usersArraySorted.map((user) => (
            <div key={user[1].id}>
                <LeaderboardCard
                    avatar={user[1].avatarURL}
                    name={user[1].name}
                    created={user[1].questions.length}
                    answered={Object.size(user[1].answers)}
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
