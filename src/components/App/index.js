import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import Main from '../Main';
import Landing from '../Landing';
import { Route, Redirect, Switch } from "react-router-dom";


class App extends Component {
    state = {
        loggedIn: false,
        user: {}
    }

    OnLoginClick= () =>
    {
        window.JF.login(
            () => {
            window.JF.getUser((user) => {
                this.setState({loggedIn:true,user:user})
            },(err) => console.log(err) )
            }
            ,
            (err) => console.log(err)
        );
    }
    OnLogoutClick= () => {
        window.JF.logout();
        this.setState({loggedIn: false,user:{}});
    }

    render() {
        return (
            <div className="App">
                <Header loggedIn={this.state.loggedIn} OnLoginClick={this.OnLoginClick} OnLogoutClick={this.OnLogoutClick} user={this.state.user} />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/dashboard" component={Main} />
                </Switch>
                {
                    this.state.loggedIn
                    &&
                    window.location.pathname === '/'
                    &&
                    <Redirect exact from="/" to="/dashboard/tasks"/>
                }
                {
                    !this.state.loggedIn
                    &&
                    window.location.pathname !== '/'
                    &&
                    <Redirect exact to="/"/>
                }


            </div>
        );
    }
}

export default App;
