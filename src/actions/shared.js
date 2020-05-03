import { getInitialData, getQuestions, saveQuestion, getUsers } from "../utils/api";
import { receiveUsers } from "../actions/users"
import {  receiveQuestions, addQuestion } from "../actions/questions"
import { showLoading, hideLoading } from 'react-redux-loading'



export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return(
            getInitialData()
                .then(({users}) => {
                    dispatch(receiveUsers(users))
                    dispatch(handleQuestions())
                    dispatch(hideLoading())
                })
        )
    }
}

export function handleUsers () {
    return (dispatch) => {
        return(
            getUsers()
                .then(({users}) => {
                    dispatch(receiveUsers(users))
                })
        )
    }
}

export function handleQuestions () {
    return (dispatch) => {
        return(
            getQuestions()
                .then(({questions}) => {
                    dispatch(receiveQuestions(questions))
                })
        )
    }
}

export function handleAddQuestion (question) {
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestion(question)
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(handleQuestions()))
        .then(() => dispatch(handleUsers()))
        .then(() => dispatch(hideLoading()))
    }
}
