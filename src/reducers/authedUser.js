import { SET_AUTHED_USER, UPDATE_USER_ANSWER, UPDATE_USER_QUESTION } from "../actions/authedUser";

export default function authedUser (state = null, action ) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.user
        case UPDATE_USER_ANSWER:
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [action.question]: action.option
                }
            }
            case UPDATE_USER_QUESTION:
                return {
                    ...state,
                    questions: state.questions.concat(action.question)
                }
        default:
            return state
    }
}