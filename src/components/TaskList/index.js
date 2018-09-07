import React, { Component } from 'react';
import './TaskList.css';
import requestHandler from '../RequestHandler';
import { Redirect } from 'react-router-dom';

class TaskList extends Component {

    constructor (props){
        super(props);
        this.state={ redirect:'' , showArchived:false }
    }


    componentDidMount() {
        requestHandler.getForms().then((response) => {
            let routinesList = response.data.content.filter(
                (form) => form.title.indexOf("{DailyRoutine}") !== -1 && form.status === "ENABLED" );
            this.props.setRoutines(routinesList);
            let inactivesList = response.data.content.filter(
                (form) => form.title.indexOf("{DailyRoutine}") !== -1 && form.status === "DELETED" );
            this.props.setInactiveRoutines(inactivesList);
        })
    }

    onRoutineClick = (id)=>{
        this.props.setActiveRoutine(id);
        this.setState({redirect:'/dashboard/tasks/'+id})
    }
    onShowArchived = ()=>this.setState({showArchived:!this.state.showArchived})
    render()
    {
        return (
            <div>
                <h2 className="TaskListTitle">Active Routines:</h2>
                <ul className="Dashboard-list">
                    {
                        this.props.routineForms.map((form,index)=> {
                            return (
                                <li className="taskItem" key={index} onClick={() => this.onRoutineClick(form.id)} >
                                    <div className="name">
                                        {form.title.substr(15)}
                                    </div>
                                    <div className="time">
                                        Done: {form.count} time(s)
                                    </div>
                                    { this.state.redirect !== '' && <Redirect to={this.state.redirect} />}
                                </li>


                            )
                        })
                    }
                </ul>
                <h2 className="TaskListTitle" onClick={this.onShowArchived} >
                    Archived Routines
                    {!this.state.showArchived && (<span className="dropdownbutton"><i className="fas fa-caret-down"></i></span>)}
                    {this.state.showArchived && (<span className="dropdownbutton"><i className="fas fa-caret-up"></i></span>)}
                </h2>
                {
                    this.state.showArchived
                    &&
                    (
                        <ul className="Dashboard-list">
                            {
                                this.props.inactiveForms.map((form,index)=> {
                                    return (
                                        <li className="taskItem" key={index} onClick={() => this.onRoutineClick(form.id)}>
                                            <div className="name">
                                                {form.title.substr(15)}
                                            </div>
                                            <div className="time">
                                                Done: {form.count} time(s)
                                            </div>
                                            { this.state.redirect !== '' && <Redirect to={this.state.redirect} />}
                                        </li>


                                    )
                                })
                            }
                        </ul>
                    )
                }

            </div>
        )
    }

}
export default TaskList;
