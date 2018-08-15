import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import Main from '../Main';
import Landing from '../Landing';
import { Route, Redirect, Switch } from "react-router-dom";


class App extends Component {

    OnLoginClick= () =>
    {
        window.JF.login(
            () => {
            window.JF.getUser((user) => {
                this.props.actions.LogIn();
                this.props.actions.SetUser(user);
            },(err) => console.log(err) )

            }
            ,
            (err) => console.log(err)
        );
    }
    OnLogoutClick= () => {
        window.JF.logout();
        this.props.actions.LogOut();
    }

    render() {
        return (
            <div className="App">
                <Header loggedIn={this.props.loggedIn} OnLoginClick={this.OnLoginClick} OnLogoutClick={this.OnLogoutClick} user={this.props.user} />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/dashboard" component={Main} />
                </Switch>
                {
                    this.props.loggedIn
                    &&
                    window.location.pathname === '/'
                    &&
                    <Redirect exact from="/" to="/dashboard/tasks"/>
                }
                {
                    !this.props.loggedIn
                    &&
                    <Redirect exact to="/"/>
                }


            </div>
        );
    }
}

export default App;
