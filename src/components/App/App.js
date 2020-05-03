import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../../actions/shared'
import LoadingBar from 'react-redux-loading'
import Login from '../Login/Login'
import Logout from '../Logout/Logout'
import Home from '../Home/Home'
import Header from '../Header/Header'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect } from 'react-router-dom'
import NewQuestion from '../NewQuestion/NewQuestion';
import Leaderboard from '../Leaderboard/Leaderboard';
import NotFound from '../NotFound/NotFound'
import QuestionPage from '../QuestionPage/QuestionPage'
import AnswerPage from '../AnswerPage/AnswerPage'



class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        const { authedUser } = this.props;
        return (
            <Router>
                <React.Fragment>
                    <LoadingBar style={{ backgroundColor: '#ff267c'}} />
                    <div className="App">
                    <Header />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/login' component={Login} />
                            <PrivateRoute user={authedUser} >
                                <Switch>
                                    <Route path='/add' component={NewQuestion} />
                                    <Route path='/leaderboard' component={Leaderboard} />
                                    <Route exact path='/question/:id' component={QuestionPage} />
                                    <Route path='/question/:id/result' component={AnswerPage} />
                                    <Route path='/logout' component={Logout} />
                                    <Route component={NotFound} />
                                </Switch>
                            </PrivateRoute>

                        </Switch>
                    </div>
                </React.Fragment>
            </Router>
          )
    }
}

function PrivateRoute({ children, user, ...rest}) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user !== null ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(App);
