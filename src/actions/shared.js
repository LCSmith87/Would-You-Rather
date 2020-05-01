import { getInitialData, getQuestions  } from "../utils/api";
import { receiveUsers } from "../actions/users"
import {  receiveQuestions } from "../actions/questions"
import { showLoading, hideLoading } from 'react-redux-loading'


export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return(
            getInitialData()
                .then(({users}) => {
                    dispatch(receiveUsers(users))
                    dispatch(hideLoading())
                })
        )
    }
}

export function handleQuestions () {
    return (dispatch) => {
        dispatch(showLoading())
        return(
            getQuestions()
                .then(({questions}) => {
                    dispatch(receiveQuestions(questions))
                    dispatch(hideLoading())
                })
        )
    }
}