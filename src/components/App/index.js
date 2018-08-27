import React, { Component } from 'react';
import './App.css';
import HeaderContainer from '../Header/HeaderContainer';
import Main from '../Main';
import Landing from '../Landing';
import { Route, Redirect, Switch } from "react-router-dom";
import requestHandler from '../RequestHandler';


class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderContainer/>
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
