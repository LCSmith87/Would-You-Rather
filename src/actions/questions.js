import { getQuestions, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { handleUsers } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
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