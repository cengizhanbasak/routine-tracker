import React, { Component } from 'react';
import './RoutinePage.css';
import { Redirect } from 'react-router-dom';
import requestHandler from '../RequestHandler';
import moment from 'moment-timezone';
import DateCountdown from 'react-date-countdown-timer';

class RoutinePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            info: this.props.routinesList.filter( (form) => form.id === this.props.activeRoutine )[0],
            questions: {},
            submissions: [],
            loading:true,
            note: '',
            redirect: '',
            showAll: false,
            dateArrived:false
            }

    }
    componentDidMount(){
        console.log(this.state.info);
        requestHandler.getQuestions(this.props.activeRoutine).then((resp)=>{
            this.setState({questions:resp})
            requestHandler.getSubmissions(this.props.activeRoutine).then((resp)=>{
                console.log(resp);
                this.setState({submissions:resp, loading:false})
            })
        })
    }

    onRemoveFormClick = ()=>
    {
        requestHandler.removeForm(this.props.activeRoutine).then(()=> this.setState({redirect:'/dashboard/tasks'}) )
    }

    onActivateButtonClick = ()=>
    {
        requestHandler.activateForm(this.props.activeRoutine).then(()=> this.setState({redirect:'/dashboard/tasks'}) )
    }
    onEditClick = () => {
        this.setState({redirect:`/dashboard/tasks/${this.props.activeRoutine}/edit`})
    }

    onSubmitForm=(event)=>
    {
        event.preventDefault();
        requestHandler.sendSubmission(this.props.activeRoutine, this.state.note).then((resp)=>
        {
            this.setState({redirect:'/dashboard/tasks'});
            console.log(resp);
        });
    }

    onNotesInputChange=(event)=>
    {
        this.setState({note:event.target.value})
    }

    renderSubmissionForm = ()=>{
        let currentDate = new Date();
        if(this.state.submissions.length !== 0) {var lastActivityDate = new Date(this.state.submissions[0].created_at);}
        const hours20 = 72000000; // 20 hours as miliseconds
        if(this.state.submissions.length === 0 || currentDate - lastActivityDate >= hours20 || this.state.dateArrived )
            return (
                <div className="submissionForm">
                    <h2>Record today's activity</h2>
                    <form onSubmit={this.onSubmitForm}>
                        <label>Notes:</label><br/>
                        <textarea className="submission-notes" onChange={this.onNotesInputChange} /><br/>
                        <input type="submit" value="Record Activity" />
                    </form>
                </div>
                )
        else{
            var nextActivityDate = moment
                .tz(this.state.submissions[0].created_at.toString(),'America/New_York')
                .tz(moment.tz.guess()).add(20,'hours')
            return (<h3 className="submissionWarning"><DateCountdown dateTo={nextActivityDate} callback={()=>this.setState({dateArrived:true})} /> to be able to record next activity.</h3>)
        }
    }

    render(){

        if(this.props.loggedIn){
            if(this.state.loading){
                return (<h1>Please Wait...</h1>)
            }else{
                var hoursInfo = JSON.parse(this.state.questions[5].text);
                return (
                    <div className="routine-page">
                        <div className="routine-page-top">
                            <div className="routineInfoSection">
                                <h1 className="routine-title">{this.state.info.title.substr(15)}</h1>
                                <div dangerouslySetInnerHTML={{__html: this.state.questions[2].text}}></div>
                                <div className="daysInfo">
                                    <h3>Days:</h3>
                                    {
                                        Object.keys(hoursInfo).map((day,index) => (<p key={index}>{day}: {hoursInfo[day]}</p>) )
                                    }
                                </div>
                            </div>
                            { this.state.info.status !== "DELETED"
                            &&
                            (
                              <div>
                                <div className="submissionInfoSection">
                                    {
                                        this.state.submissions.length !== 0
                                        &&
                                        (
                                        <div className="submissionInfo">
                                            <h3>Last Submission:</h3>
                                            <p>Date: {moment.tz(this.state.submissions[0].created_at.toString(),'America/New_York')
                                                        .tz(moment.tz.guess())
                                                        .format('MMMM Do YYYY, h:mm:ss a')}</p>
                                            <p>Note: {this.state.submissions[0].answers[4].answer}</p>
                                        </div>
                                        )
                                    }
                                    {
                                        this.state.submissions.length === 0
                                        &&
                                        (
                                        <div className="submissionInfo">
                                            <h3>No Submissions Yet</h3>
                                        </div>
                                        )
                                    }
                                    { this.renderSubmissionForm() }
                                </div>
                              </div>
                            )
                            }
                        </div>
                        <div className="control-buttons">
                        {
                            this.state.info.status !== "DELETED"
                            &&
                            (
                                <div className="formButton deleteButton" onClick={this.onRemoveFormClick}><i className="fas fa-trash-alt"></i>Archive</div>
                            )
                        }
                        {
                            this.state.info.status !== "DELETED"
                            &&
                            (
                                <div onClick={this.onEditClick} className="formButton editButton"><i className="fas fa-edit"></i>Edit</div>
                            )
                        }
                        </div>
                        {
                            this.state.info.status !== "DELETED"
                            &&
                            this.state.submissions.length !== 0
                            &&
                            (
                                <div className="allSubmissionsSection">
                                    {
                                        !this.state.showAll
                                        &&
                                        (<span className="showAllButton" onClick={()=>this.setState({showAll:true})}>Show All Submissions</span>)
                                    }
                                    {
                                        this.state.showAll
                                        &&
                                        this.state.submissions.map((submission)=>{
                                            return (
                                                <div className="submissionInfo">
                                                    <p>Date: {moment.tz(submission.created_at.toString(),'America/New_York')
                                                                .tz(moment.tz.guess())
                                                                .format('MMMM Do YYYY, h:mm:ss a')}</p>
                                                            <p>Note: {submission.answers[4].answer}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                        {
                            this.state.info.status === "DELETED"
                            &&
                            (
                                <div>
                                    <h2>INACTIVE</h2>
                                    <div className="activateButton" onClick={this.onActivateButtonClick} >Activate Routine</div>
                                </div>
                            )
                        }
                        {
                            this.state.redirect !== ''
                            &&
                            <Redirect to={this.state.redirect} />
                        }

                    </div>
                )
            }
        }
        else{
            return <Redirect to="/" />
        }
    }

}

export default RoutinePage;
