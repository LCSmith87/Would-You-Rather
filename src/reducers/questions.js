import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_ANSWER } from "../actions/questions";

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case ADD_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.id]: question,
            }
            case SAVE_ANSWER:
                return {
                    ...state,
                    [action.question]: {
                        ...state[action.question],
                        [action.option]: {
                            ...state[action.question][action.option],
                            votes: state[action.question][action.option].votes.concat(action.user.id)

                        }
                    }
                }
        default:
            return state
    }
}