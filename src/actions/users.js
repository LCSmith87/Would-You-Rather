import { getUsers } from '../utils/api'
import { setAuthedUser } from './authedUser'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER'
export const UPDATE_USER_QUESTION = 'UPDATE_USER_QUESTION'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function handleUsers () {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return(
            getUsers()
                .then(({users}) => {
                    dispatch(receiveUsers(users))
                    dispatch(setAuthedUser(users[authedUser.id]))
                })
        )
    }
}

export function updateUserAnswer (user, question, option) {
    return {
        type: UPDATE_USER_ANSWER,
        user,
        question,
        option
    }
}

export function updateUserQuestion (user, question) {
    return {
        type: UPDATE_USER_QUESTION,
        user,
        question
    }
}
