import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../../actions/shared'
import LoadingBar from 'react-redux-loading'


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
        console.log(this.props.loading)
    }
    render() {
        return (
            <React.Fragment>
            <div className="App">
                <LoadingBar style={{ backgroundColor: '#ff267c'}} />
            </div>
            </React.Fragment>
          )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App);
