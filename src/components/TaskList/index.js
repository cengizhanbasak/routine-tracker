import React, { Component } from 'react';
import './TaskList.css';

class TaskList extends Component {

    render()
    {
        return (
            <ul className="Dashboard-list">
                <li className="taskItem">
                    <div className="name">
                        Stay Awesome
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
                <li className="taskItem">
                    <div className="name">
                        Workout
                    </div>
                    <div className="time">
                        16:30
                    </div>
                    <div className="recentProgress">
                        <div className="dayProgress done">Done</div>
                        <div className="dayProgress fail">Fail</div>
                        <div className="dayProgress done">Done</div>
                        <div className="dayProgress fail">Fail</div>
                        <div className="dayProgress fail">Fail</div>
                        <div className="dayProgress done">Done</div>
                        <div className="dayProgress inProgress">-</div>
                    </div>
                </li>
            </ul>
        )
    }

}
export default TaskList;
