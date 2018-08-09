import React, { Component } from 'react';
import './HabitForm.css';

class HabitForm extends Component {

    constructor(props){
        super(props)
        this.state={
            title:'',
            description:'',
        }
    }

    onTitleInputChange=(event)=>{
        this.setState({title: event.target.value});
    }

    onDescriptionInputChange=(event)=>{
        this.setState({description: event.target.value});
    }

    onSubmitForm = (event) => {
        event.preventDefault();

        let properties = {
            'formType': 'cardForm',
        }
        let formObject = {
            "properties":properties,
            "properties[title]":`${'{JotPoll} '+this.state.title}`,
            "questions[0][type]": "control_head" ,
            "questions[0][text]":`${this.state.title}`,
            "questions[0][order]":1,
            "questions[0][name]":"Header",
            "questions[1][type]":`${'control_textbox'}`,
            "questions[1][text]":`${this.state.description}`,
            "questions[1][order]":"2",
            "questions[1][qid]":"2",
            "Questions[1][name]":"pollQuestion",
            // "questions[3][name]":"submit",
            // "questions[3][text]":"Submit",
            // "questions[3][type]":"control_button",
            // "questions[3][order]":"4",
            // "questions[3][qid]":"4",
        };
        window.JF.createForm(formObject,(resp) => {console.log(resp)},(err)=>console.log(err));
    }

    render()
    {
        let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
        return (
            <div className="habitFormPage">
                <form onSubmit={this.onSubmitForm}>
                    <label>Title: </label><br/>
                    <input className="input_name" type="text" onChange={this.onTitleInputChange}/><br/>
                    <label>Description: </label><br/>
                    <textarea className="input_descr" onChange={this.onDescriptionInputChange}/><br/>
                    <label>Remind me at: </label><br/>
                    <input type="time" className="time"/><br/>
                    <label>Active Days: </label><br/>
                    { days.map((day,index)=> (<span key={index}><input type="checkbox" name={day}/> {day} <br/></span>)) }
                    <input type="submit" value="Add Habit" />
                </form>
            </div>
        )
    }


}
export default HabitForm;
