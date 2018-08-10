import React, { Component } from 'react';
import './TaskList.css';

const axios = require('axios');

class TaskList extends Component {
    constructor (props){
        super(props);
        this.state={ routineForms:[] }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://api.jotform.com/user/forms?apikey=85dcbbcdad0b18a508112756e56fdcfb',
        }).then((response) => {
            this.setState({routineForms:response.data.content.filter(
                (form) => form.title.indexOf("{DailyRoutine}") !== -1 && form.status === "ENABLED" )});
        })
    }

    render()
    {
        return (
            <ul className="Dashboard-list">
                {
                    this.state.routineForms.map((form)=> {
                        return (
                            <li className="taskItem">
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
