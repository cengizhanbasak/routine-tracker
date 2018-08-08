import React, { Component } from 'react';
import './App.css';
// import JF from 'jotform';
import Header from '../Header';
import Main from '../Main';
import Landing from '../Landing';
import { Route, Link, Redirect } from "react-router-dom";


class App extends Component {
    state = {
        loggedIn: false,
        user: {name: "Tosunami"}
    }

    OnLoginClick= () =>
    {
        this.setState({loggedIn:true});
        // JF.login(
        //     () => this.setState({loggedIn:true})
        //     ,
        //     () => alert('could not login')
        // );
    }
    OnSignupClick= () => this.setState({loggedIn: true});
    OnLogoutClick= () => this.setState({loggedIn: false});

    render() {
        return (
            <div className="App">
                <Header loggedIn={this.state.loggedIn} OnLoginClick={this.OnLoginClick} OnSignupClick={this.OnSignupClick} OnLogoutClick={this.OnLogoutClick}/>
                <Route exact path="/" component={Landing} />
                <Route path="/dashboard" component={Main} />
                {
                    this.state.loggedIn
                    &&
                    <Redirect to="/dashboard"/>
                }
                {
                    !this.state.loggedIn
                    &&
                    <Redirect to="/"/>
                }
                <script src="https://js.jotform.com/JotForm.js"></script>
            </div>
        );
    }
}

export default App;
