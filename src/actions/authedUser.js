export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER'
export const UPDATE_USER_QUESTION = 'UPDATE_USER_QUESTION'

export function setAuthedUser (user) {
    return {
        type: SET_AUTHED_USER,
        user,
    }
}

export function updateUserQuestion (question) {
    return {
        type: UPDATE_USER_QUESTION,
        question
    }
}

export function updateUserAnswer (question, option) {
    return {
        type: UPDATE_USER_ANSWER,
        question,
        option
    }
}