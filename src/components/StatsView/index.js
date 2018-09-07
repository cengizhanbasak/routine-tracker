import React, { Component } from 'react';
import './StatsView.css';


class StatsView extends Component {

    constructor(props){
        super(props);
        var totalRecords = 0;
        this.props.routinesList.forEach((routine)=> totalRecords += parseInt(routine.count,10) )
        this.state={ achievements:0, totalRecords  }

    }

    componentDidMount(){
        if(this.state.totalRecords >= 5){
            this.setState({ achievements: this.state.achievements+1 })
        }
        if(this.state.totalRecords >= 10){
            this.setState({ achievements: this.state.achievements+2 })
        }
        if(this.state.totalRecords >= 50){
            this.setState({ achievements: this.state.achievements+1 })
        }
    }

    render(){

        return (
            <div className="Stats-page">
                <div className="Stats-header">
                    <div className="col taskCount">
                        <h1 className="big">{this.props.routinesList.length}</h1>
                        <h2>Routines Tracking</h2>
                    </div>
                    <div className="col taskFill">
                        <h1 className="big">{this.state.totalRecords}</h1>
                        <h2>Total Routine Records</h2>
                    </div>
                    <div className="col taskPercent">
                        <h1 className="big">{this.state.achievements}</h1>
                        <h2>Achievements</h2>
                    </div>
                </div>
                <div className="achievements-section">
                    <h1> Achievements </h1>
                    <ul className="achievements-list">
                    {
                        this.state.totalRecords>=5
                        &&
                        <li>
                            <div className="achievement-name">Beginner</div>
                            <div className="descr"> Record 5 times on routines </div>
                        </li>
                    }
                    {
                        this.state.totalRecords>=10
                        &&
                        <li>
                            <div className="achievement-name">Intermediate</div>
                            <div className="descr"> Record 10 times on routines </div>
                        </li>
                    }
                    {
                        this.state.totalRecords>=50
                        &&
                        <li>
                            <div className="achievement-name">Pro</div>
                            <div className="descr"> Record 50 times on routines </div>
                        </li>
                    }
                    </ul>

                </div>
            </div>
        )
    }

}

export default StatsView;
