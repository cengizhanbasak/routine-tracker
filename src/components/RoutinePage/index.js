import React, { Component } from 'react';
import './RoutinePage.css';
import { Redirect } from 'react-router-dom';
import requestHandler from '../RequestHandler';
import toMarkdown from 'to-markdown'
import marked from 'marked'

class RoutinePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            info: this.props.routinesList.filter( (form) => form.id === this.props.activeRoutine )[0],
            questions: {},
            submissions: [],
            loading:true,
            note: ''
            }

    }
    componentDidMount(){
        requestHandler.getQuestions(this.props.activeRoutine).then((resp)=>{
            this.setState({questions:resp})
            requestHandler.getSubmissions(this.props.activeRoutine).then((resp)=>{
                console.log(resp);
                this.setState({submissions:resp, loading:false})
            })
        })
    }
    onSubmitForm=(event)=>
    {
        event.preventDefault();
        requestHandler.sendSubmission(this.props.activeRoutine, this.state.note);
    }

    onNotesInputChange=(event)=>
    {
        this.setState({note:event.target.value})
    }

    renderSubmissionForm = ()=>{
        if(this.state.submissions.length === 0 || new Date() - new Date(this.state.submissions[0].created_at) >= 72000000 )
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
            return (<h2 className="submissionWarning">You have to wait at least 20 hours before recording another activity.</h2>)
    }

    render(){
        if(this.props.loggedIn){
            if(this.state.loading){
                return (<h1>Please Wait...</h1>)
            }else{
                var sanitize = function(htmlString){
                  return marked(toMarkdown(htmlString), {sanitize: true})
                }
                var hoursInfo = JSON.parse(this.state.questions[5].text.substr(3,this.state.questions[5].text.length-7));
                return (
                    <div className="routine-page">
                        <h1 className="routine-title">{this.state.info.title.substr(15)}</h1>
                        <div dangerouslySetInnerHTML={{__html: sanitize(this.state.questions[2].text) }}></div>
                        <div className="daysInfo">
                            <h3>Days:</h3>
                            {
                                Object.keys(hoursInfo).map((day,index) => (<p key={index}>{day}: {hoursInfo[day]}</p>) )
                            }
                        </div>
                        {
                            this.state.submissions.length !== 0
                            &&
                            (
                            <div className="submissionInfo">
                                <h3>Last Submission:</h3>
                                <p>Date: {this.state.submissions[0].created_at}</p>
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
                )
            }
        }
        else{
            return <Redirect to="/" />
        }
    }

}

export default RoutinePage;
