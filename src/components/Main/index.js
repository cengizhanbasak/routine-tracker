import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Main.css';
import TaskListContainer from '../TaskList/TaskListContainer';
import StatsView from '../StatsView';
import HabitForm from '../HabitForm';
import RoutinePageContainer from '../RoutinePage/RoutinePageContainer';



class Main extends Component {

render(){
    return (
        <div className="Main">
            <div className="Dashboard-head">
                <div className="dbhead-content">
                    <div className="Menu">
                        <Link to={this.props.match.url + "/tasks"}><h1>Tasks</h1></Link>
                        <Link to={this.props.match.url + "/stats"}><h1>Stats</h1></Link>
                    </div>
                    <Link to={this.props.match.url + "/tasks/new"}><h1 className="NewHabitButton">New Routine</h1></Link>
                </div>
                <hr/>
            </div>
                <Route exact path={this.props.match.url + "/tasks"} render={()=> <TaskListContainer/>}/>
                <Route path={this.props.match.url + "/stats"} render={() => <StatsView/>}/>
                <Route path={this.props.match.url + "/tasks/:id"} render={()=> <RoutinePageContainer />}/>
                <Route path={this.props.match.url + "/tasks/new"} render={()=> <HabitForm/>}/>
        </div>
    )
}



}

export default Main;
