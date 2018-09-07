import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Main.css';
import TaskListContainer from '../TaskList/TaskListContainer';
import StatsViewContainer from '../StatsView/StatsViewContainer';
import HabitFormContainer from '../HabitForm/HabitFormContainer';
import RoutinePageContainer from '../RoutinePage/RoutinePageContainer';



class Main extends Component {

render(){
    return (
        <div className="Main">
            <div className="Dashboard-head">
                <div className="dbhead-content">
                    <div className="Menu">
                        <Link to={this.props.match.url + "/tasks"}><h2>Tasks</h2></Link>
                        <Link to={this.props.match.url + "/stats"}><h2>Stats</h2></Link>
                    </div>
                    <Link to={this.props.match.url + "/tasks/new"}><h2 className="NewHabitButton">New Routine</h2></Link>
                </div>
            </div>
                <Route exact path={this.props.match.url + "/tasks"} render={()=> <TaskListContainer/>}/>
                <Route path={this.props.match.url + "/stats"} render={() => <StatsViewContainer/>}/>
                <Route exact path={this.props.match.url + "/tasks/:id([0-9]*)"} render={()=> <RoutinePageContainer />}/>
                <Route exact path={this.props.match.url + "/tasks/:id([0-9]*)/edit"} render={()=> <HabitFormContainer mode="edit"/>}/>
                <Route path={this.props.match.url + "/tasks/new"} render={()=> <HabitFormContainer mode="new" />}/>
        </div>
    )
}



}

export default Main;
