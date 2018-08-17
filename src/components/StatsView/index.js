import React, { Component } from 'react';
import './StatsView.css';


class StatsView extends Component {

    render(){
        var totalRecords = 0;
        this.props.routinesList.forEach((routine)=> totalRecords += parseInt(routine.count,10) )

        return (
            <div className="Stats-page">
                <div className="Stats-header">
                    <div className="col taskCount">
                        <h1 className="big">{this.props.routinesList.length}</h1>
                        <h1>Routines Tracking</h1>
                    </div>
                    <div className="col taskFill">
                        <h1 className="big">{totalRecords}</h1>
                        <h1>Total Routine Records</h1>
                    </div>
                    <div className="col taskPercent">
                        <h1 className="big">0</h1>
                        <h1>Achievements</h1>
                    </div>
                </div>
            </div>
        )
    }

}

export default StatsView;
