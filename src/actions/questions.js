import { getQuestions, saveQuestion, saveAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { handleUsers } from './users'
import { updateUserAnswer, updateUserQuestion } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

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

export function saveQuestionAnswer (user, question, option) {
    return {
        type: SAVE_ANSWER,
        user,
        question,
        option
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
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestion(question)
        .then((question) => dispatch(addQuestion(question)))
        .then((question) => {
            const { id } = question.question
            dispatch(updateUserQuestion(authedUser, id))
        })
        .then(() => dispatch(handleQuestions()))
        .then(() => dispatch(handleUsers()))
        .then(() => dispatch(hideLoading()))
    }
}

export function handleSaveAnswer (question, option) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveAnswer(authedUser.id, question.id, option)
        .then(() => dispatch(saveQuestionAnswer(authedUser, question.id, option)))
        .then(() => dispatch(updateUserAnswer(authedUser, question.id, option)))
        .then(() => dispatch(handleUsers()))
        .then(() => dispatch(hideLoading()))
    }
}