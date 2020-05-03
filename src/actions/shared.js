import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users"
import { handleQuestions } from './questions'
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



