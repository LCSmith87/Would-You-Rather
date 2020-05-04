import { RECEIVE_USERS, UPDATE_USER_QUESTION, UPDATE_USER_ANSWER } from "../actions/users";

export default function user (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
            case UPDATE_USER_ANSWER:
                return {
                    ...state,
                    [action.user.id]: {
                        ...state[action.user.id],
                        answers: {
                            ...state[action.user.id].answers,
                            [action.question]: action.option
                        }
                    }
                }
                case UPDATE_USER_QUESTION:
                    return {
                        ...state,
                        [action.user.id]: {
                            ...state[action.user.id],
                            questions: state[action.user.id].questions.concat(action.question)
                        }
                    }
        default:
            return state
    }
}

