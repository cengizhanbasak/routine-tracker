import React, { Component } from 'react';
import './TaskList.css';
import requestHandler from '../RequestHandler';
import { Redirect } from 'react-router-dom';

class TaskList extends Component {

    constructor (props){
        super(props);
        this.state={ routineForms:[], redirect:'' }
    }


    componentDidMount() {
        requestHandler.getForms().then((response) => {
            console.log(response);
            let routinesList = response.data.content.filter(
                (form) => form.title.indexOf("{DailyRoutine}") !== -1 && form.status === "ENABLED" );
            this.props.setRoutines(routinesList);

        })
    }

    onRoutineClick = (id)=>{
        this.props.setActiveRoutine(id);
        this.setState({redirect:'/dashboard/tasks/'+id})
    }

    render()
    {
        return (
            <ul className="Dashboard-list">
                {
                    this.props.routineForms.map((form,index)=> {
                        return (
                            <li className="taskItem" key={index}>
                                <div className="name">
                                    {form.title.substr(15)}
                                </div>
                                <div className="time">
                                    Done: {form.count} time(s)
                                </div>
                                <div className="detailsButton" onClick={() => this.onRoutineClick(form.id)}>
                                    Show Details
                                </div>
                                { this.state.redirect !== '' && <Redirect to={this.state.redirect} />}
                            </li>


                        )
                    })
                }

            </ul>
        )
    }

}
export default TaskList;
