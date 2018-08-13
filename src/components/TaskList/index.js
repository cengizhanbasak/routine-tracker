import React, { Component } from 'react';
import './TaskList.css';
import requestHandler from '../RequestHandler';

class TaskList extends Component {

    constructor (props){
        super(props);
        this.state={ routineForms:[] }
    }


    componentDidMount() {
        requestHandler.getForms().then((response) => {
            console.log(response);
            let routinesList = response.data.content.filter(
                (form) => form.title.indexOf("{DailyRoutine}") !== -1 && form.status === "ENABLED" );
            this.props.setRoutines(routinesList);

        })
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
                                    {form.title}
                                </div>
                                <div className="time">
                                    12:30
                                </div>
                                <div className="recentProgress">
                                    <div className="dayProgress done">Done</div>
                                    <div className="dayProgress done">Done</div>
                                    <div className="dayProgress done">Done</div>
                                    <div className="dayProgress fail">Fail</div>
                                    <div className="dayProgress inProgress">-</div>
                                    <div className="dayProgress inProgress">-</div>
                                    <div className="dayProgress inProgress">-</div>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        )
    }

}
export default TaskList;
