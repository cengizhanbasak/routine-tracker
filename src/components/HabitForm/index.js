import React, { Component } from 'react';
import './HabitForm.css';
import {Redirect} from 'react-router-dom';
import requestHandler from '../RequestHandler';

class HabitForm extends Component {

    constructor(props){
        super(props)
        if(this.props.mode === 'new'){
            this.state={
                title:'',
                description:'',
                diffEveryDay:false,
                redirect:'',
                activeDays: [],
                hours: null,
            }
        }

        if(this.props.mode === 'edit'){
            let routine = this.props.routines.filter( (form) => form.id === this.props.active )[0];
            this.state={
                title:routine.title.substr(15),
                description:'',
                diffEveryDay:false,
                redirect:'',
                activeDays: [],
                hours: null,
            }
        }

    }

    componentDidMount(){
        if(this.props.mode === 'edit' ){
            requestHandler.getQuestions(this.props.active).then((resp)=>{
                this.setState({description:resp[2].text.substr(3,resp[2].text.length-7)})
            })
        }
    }



    onTitleInputChange=(event)=>{
        this.setState({title: event.target.value});
    }

    onDescriptionInputChange=(event)=>{
        this.setState({description: event.target.value});
    }

    onDiffEverydayChange=(event)=>{
        this.setState({diffEveryDay:event.target.checked});
        this.setState({hours:null})
    }

    onDayChange=(event)=>{
        if(event.target.checked){
            this.setState({activeDays:this.state.activeDays.concat([event.target.name])})
        }else{
            this.setState({activeDays:this.state.activeDays.filter((x)=> (x !== event.target.name) ) })
        }
    }

    onHourChange=(event)=>{
        let hrs = Object.assign({},this.state.hours);
        hrs[event.target.name] = event.target.value;
        this.setState({hours: hrs})
    }

    renderSubmitButton= ()=>{
        if(this.state.title === '') return <input className="addRoutineButton" type="submit" value="Add Routine" disabled />;
        if(this.state.activeDays.length === 0 || this.state.hours === null) return <input className="addRoutineButton" type="submit" value="Add Routine" disabled />;
        if(this.state.diffEveryDay && Object.keys(this.state.hours).length !== this.state.activeDays.length) return <input className="addRoutineButton" type="submit" value="Add Routine" disabled />;
        return <input className="addRoutineButton" type="submit" value="Add Routine" />
    }

    onSubmitForm = (event) => {
        event.preventDefault();

        var hrs = {}
        if(!this.state.diffEveryDay){
            this.state.activeDays.forEach((day)=>{
                hrs[day] = this.state.hours.time;
            })
        }else{
            hrs=this.state.hours
        }


        const properties = {
            "emails":[],
            "formType":"classic",
            "activeRedirect": "thanktext",
            "alignment": "Top",
            "background": "#fff",
            "clearFieldOnHide": "disable",
            "defaultAutoResponderEmailAssigned": "No",
            "defaultEmailAssigned": "Yes",
            "expireDate": "No Limit",
            "font": "Lucida Grande",
            "fontcolor": "#555",
            "fontsize": "14",
            "formStringsChanged": "No",
            "formWidth": "690",
            "hideEmptySubmissionFields": "No",
            "hideMailEmptyFields": "enable",
            "hideSubmissionHeader": "No",
            "highlightLine": "Enabled",
            "injectCSS": ".form-label.form-label-auto { display: block; float: none; text-align: left; width: inherit; } /*__INSPECT_SEPERATOR__*/",
            "isEncrypted": "No",
            "labelWidth": "150",
            "limitSubmission": "No Limit",
            "lineSpacing": "12",
            "messageOfLimitedForm": "This form is currently unavailable!",
            "mobileGoButton": "enable",
            "optioncolor": "#000",
            "responsive": "No",
            "sendpostdata": "No",
            "showJotFormLogo": "No",
            "showProgressBar": "disable",
            "styleJSON": "{\"@fontFamily\":\"Lucida Grande\",\"@fontSize\":\"14\",\"@labelAlign\":\"Top\",\"@labelWidth\":\"150\",\"@formWidth\":\"690\",\"@clrText\":\"#555\",\"@selectedScheme\":\"clr-default\",\"@clrBg\":\"#f5f5f5\",\"@clrFrame\":\"#fff\",\"@clrInput\":\"#fff\",\"@clrActive\":\"#FFFFE0\",\"@clrErrorBg\":\"#FFF4F4\",\"@clrLabel\":\"#555\",\"@formCover\":\"-1\",\"@formCoverImg\":\"\",\"@formCoverImgWidth\":\"207\",\"@formCoverImgHeight\":\"100\",\"@formCoverPosition\":\"Top\",\"@formCoverTopPosition\":\"Left\",\"@formCoverBottomMargin\":\"10\",\"@lineSpacing\":\"12\",\"@clrTextInputBg\":\"#fff\"}",
            "styles": "nova",
            "submitError": "jumpToFirstError",
            "thanktext": "<p style=\"text-align:center;\"><img src=\"https://cdn.jotfor.ms/img/check-icon.png\" alt=\"\" width=\"128\" height=\"128\" /></p><div style=\"text-align:center;\"><h1 style=\"text-align: center;\">Thank You!</h1><p style=\"text-align: center;\">Your submission has been received.</p></div>",
            "themeDesigner": "nova",
            "themeID": "566a91c2977cdfcd478b4567",
        }

        const date = {
            ageVerification: "No",
            allowTime: "No",
            autoCalendar: "No",
            dateSeparator: "-",
            defaultDate: "current",
            defaultTime: "none",
            description: "",
            format: "yyyymmdd",
            labelAlign: "Auto",
            limitDate:JSON.stringify({
                "days":{"monday":"true","tuesday":"true","wednesday":"true","thursday":"true","friday":"true","saturday":"true","sunday":"true"},
                "future":"true",
                "past":"true",
                "custom":"false",
                "ranges":"false",
                "start":"",
                "end":""
            }),
            liteMode: "Yes",
            minAge: "13",
            name: "date",
            onlyFuture: "No",
            order: "3",
            qid: "3",
            readonly: "No",
            required: "No",
            startWeekOn: "Sunday",
            step: "10",
            sublabels: {
            day: "Day",
            month: "Month",
            year: "Year",
            last: "Last Name",
            hour: "Hour",
            minutes: "Minutes",
            litemode: "Date"
            },
            text: "Date",
            timeFormat: "AM/PM",
            type: "control_datetime",
            validateLiteDate: "Yes"
        }

        const hours = {
            name: "times",
            order: "4",
            qid: "5",
            text: JSON.stringify(hrs),
            type: "control_text"
        }

        const formObject = {
            "properties":properties,
            "properties[title]":`{DailyRoutine} ${this.state.title}`,
            "questions[0][type]": "control_head" ,
            "questions[0][text]":`${this.state.title}`,
            "questions[0][order]":1,
            "questions[0][qid]":1,
            "questions[0][name]":"Header",
            "questions[1][name]":`Description`,
            "questions[1][type]":`control_text`,
            "questions[1][text]":`<p>${this.state.description}</p>`,
            "questions[1][order]":2,
            "questions[1][qid]":2,
            "questions[2]":date,
            "questions[3][type]":`control_textarea`,
            "questions[3][text]":`Notes`,
            "questions[3][order]":"5",
            "questions[3][qid]":"4",
            "questions[3][cols]":`40`,
            "questions[3][name]":"notes",
            "questions[4]":hours,
        };
        console.log(formObject);

        if(this.props.mode==='new'){
            requestHandler.postForm(formObject).then(()=>{
                this.setState({redirect:'/dashboard/tasks'})
            });
        }
        if(this.props.mode==='edit'){
            requestHandler.editForm(this.props.active,formObject).then(()=>{
                this.setState({redirect:'/dashboard/tasks'})
            });;
        }

    }

    render()
    {
        let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
        return (
            <div className="habitFormPage">
                <form onSubmit={this.onSubmitForm}>
                    <div className="form-column">
                        <label>Title*: </label><br/>
                        <input className="input_name" type="text" value={this.state.title} onChange={this.onTitleInputChange}/><br/>

                        <label>Description: </label><br/>
                        <textarea className="input_descr"  value={this.state.description} onChange={this.onDescriptionInputChange}/><br/>
                    </div>
                    <div className="form-column">
                        <label>Active Days*: </label><br/>
                        { days.map((day,index)=> (<span key={index}><input type="checkbox" name={day} onChange={this.onDayChange}/> {day} <br/></span>)) }
                    </div>
                    <div className="form-column">
                        <label>Remind me at*: </label><br/>
                        <label>Different hours every day </label>
                        <input type="checkbox" name="diffEveryDay" onChange={this.onDiffEverydayChange}></input>
                        {
                            !this.state.diffEveryDay
                            &&
                            (<div><input type="time" name="time" onChange={this.onHourChange} /><br/></div>)
                        }
                        {
                            this.state.diffEveryDay
                            &&
                            (
                                <div>
                                    {this.state.activeDays.map((day,index)=>(
                                        <span key={index}>
                                            <label>{day}:</label><br/>
                                            <input type="time" name={`${day}`} onChange={this.onHourChange} /><br/>
                                        </span>
                                    ))}
                                </div>
                            )
                        }
                        {this.renderSubmitButton()}
                    </div>

                </form>
                {
                    this.state.redirect !== ''
                    &&
                    <Redirect to={this.state.redirect} />
                }
            </div>
        )
    }


}
export default HabitForm;
