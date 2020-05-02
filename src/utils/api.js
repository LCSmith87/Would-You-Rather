import {
    _getUsers,
    _getQuestions,
    _saveQuestion
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

  export function saveQuestion (question) {
    return _saveQuestion(question)
  }