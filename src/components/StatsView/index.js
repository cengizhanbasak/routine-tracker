import React, { Component } from 'react';
import './StatsView.css';


class StatsView extends Component {

    render(){
        return (
            <div className="Stats-page">
                <div className="Stats-header">
                    <div className="col taskCount">
                        <h1 className="big">5</h1>
                        <h1>Habits Tracking</h1>
                    </div>
                    <div className="col taskFill">
                        <h1 className="big">6</h1>
                        <h1>Days Streak</h1>
                    </div>
                    <div className="col taskPercent">
                        <h1 className="big">74%</h1>
                        <h1>Completion</h1>
                    </div>
                </div>
            </div>
        )
    }

}

export default StatsView;
