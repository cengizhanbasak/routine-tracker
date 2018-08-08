import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Main.css';
import TaskList from '../TaskList';
import StatsView from '../StatsView';
import HabitForm from '../HabitForm';



class Main extends Component {

    state={view: 'tasks'}

render(){
    return (
        <div className="Main">
            <div className="Dashboard-head">
                <div className="dbhead-content">
                    <div className="Menu">
                        <Link to={this.props.match.url + "/tasks"}><h1 onClick={() => this.setState({view: 'tasks'})}>Tasks</h1></Link>
                        <Link to={this.props.match.url + "/stats"}><h1 onClick={() => this.setState({view: 'stats'})}>Stats</h1></Link>
                    </div>
                    <Link to={this.props.match.url + "/tasks/new"}><h1 className="NewHabitButton" onClick={() => this.setState({view: 'new_habit'})}>New Habit</h1></Link>
                </div>
                <hr/>
                {this.state.view == 'tasks' && <h2>Tasks</h2>}
                {this.state.view == 'stats' && <h2>Stats</h2>}
                {this.state.view == 'new_habit' && <h2>New Habit</h2>}
            </div>
                <Route exact path={this.props.match.url + "/tasks"} component={TaskList}/>
                <Route path={this.props.match.url + "/stats"} component={StatsView}/>
                <Route path={this.props.match.url + "/tasks/new"} component={HabitForm}/>
        </div>
    )
}



}

export default Main;
