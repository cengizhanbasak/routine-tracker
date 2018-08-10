import React, { Component } from 'react';
import './TaskList.css';
import RequestHandler from '../RequestHandler';

class TaskList extends Component {
    constructor (props){
        super(props);
        this.state={ routineForms:[] }
        this.req = new RequestHandler('85dcbbcdad0b18a508112756e56fdcfb');
    }

    componentDidMount() {
        this.req.getForms().then((response) => {
            this.setState({routineForms:response.data.content.filter(
                (form) => form.title.indexOf("{DailyRoutine}") !== -1 && form.status === "ENABLED" )});
        })
    }

    render()
    {
        return (
            <ul className="Dashboard-list">
                {
                    this.state.routineForms.map((form,index)=> {
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
