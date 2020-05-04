import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
  } from './_DATA.js'

  export function getInitialData () {
    return Promise.all([
      _getUsers(),
    ]).then(([users]) => ({
      users,
    }))
  }

  export function getQuestions () {
    return Promise.all([
      _getQuestions(),
    ]).then(([questions]) => ({
      questions,
    }))
  }

  export function getUsers () {
    return Promise.all([
      _getUsers(),
    ]).then(([users]) => ({
      users,
    }))
  }

  export function saveQuestion (question) {
    return _saveQuestion(question)
  }

  export function saveAnswer (user, question, option) {
    const questionAnswer = {
      authedUser: user,
      qid: question,
      answer: option
    }
    return _saveQuestionAnswer(questionAnswer)
  }