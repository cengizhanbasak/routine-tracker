import React, { Component } from 'react';
import './HabitForm.css';

const qs = require('qs');
const axios = require('axios');

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
        var apiKey = window.JF.getAPIKey();

        console.log(apiKey);

        const emailProps = {
            "body":`<body><table border="0" width="100%" cellspacing="0" cellpadding="0" bgcolor="#f7f9fc"><tbody><tr><td height="30">
                    </td>
                    </tr><tr><td align="center">
                        <table border="0" width="500" cellspacing="0" cellpadding="0" bgcolor="#eeeeee" style="min-width: 500px;width: 500px;"><tbody><tr><td bgcolor="#EEEEEE" width="4">&nbsp;
                        </td><td bgcolor="#EEEEEE" width="30" height="36"><img style="display: block;" src="https://cdn.jotfor.ms/assets/img/builder/email_logo_small.png" alt=""></td><td style="font-size: 16px; vertical-align: middle; color: #f9922b; padding-top: 2px; line-height: 20px;" align="left" bgcolor="#EEEEEE"><strong>{form_title}</strong></td>
                        </tr></tbody></table><table border="0" width="500" cellspacing="0" cellpadding="0" bgcolor="#eeeeee" style="min-width: 500px;width: 500px;"><tbody><tr><td bgcolor="#EEEEEE" width="4">
                    </td>
                        <td align="center" bgcolor="#FFFFFF">
                            <table id="emailFieldsTable" class="mceNonEditable" border="0" width="100%" cellspacing="0" cellpadding="5"><tbody id="emailFieldsTableBody"><tr id="row_1" class="questionRow"><td bgcolor="white" id="question_1" class="questionColumn" style="padding:5px !important;" valign="top" width="170">Email</td><td bgcolor="white" id="value_1" class="valueColumn" style="padding:5px !important;">{email}</td></tr><tr id="row_2" class="questionRow"><td id="question_2" class="questionColumn" bgcolor="#f3f3f3" style="padding:5px !important;" valign="top" width="170">Your answer is</td><td id="value_2" class="valueColumn" bgcolor="#f3f3f3" style="padding:5px !important;">{pollQuestion}</td></tr></tbody></table></td>

                        <td bgcolor="#EEEEEE" width="4">

                        </td>
                    </tr><tr><td style="font-size: 4px;" bgcolor="#EEEEEE" height="4">
                    </td>
                        <td style="font-size: 4px;" bgcolor="#EEEEEE">&nbsp;</td>
                        <td style="font-size: 4px;" bgcolor="#EEEEEE">&nbsp;</td>
                    </tr></tbody></table><table id="autoresponder-footer" width="500" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td bgcolor="#f7f9fc" height="6" style="font-size:6px;"></td>
                        <td bgcolor="#f7f9fc" style="font-size:6px;"></td>
                    </tr><tr style="font-size: 14px"><td style="text-align: left;"><a href="https://www.jotform.com/?utm_source=emailfooter&amp;utm_medium=email&amp;utm_term=82074704523958&amp;utm_content=email_footer_text&amp;utm_campaign=autoresponder_email_footer_new_cf_old" target="_blank" style="text-decoration: none; color: #535353">Now create your own JotForm - <span style="color: #ababab;">It&rsquo;s free!</span></a></td>
                        <td style="text-align: right;">
                            <a style="border: 0; text-decoration: none; color: #fff; display: inline-block; font-size: 16px; line-height: 36px; width: 160px; text-align: center; background-color: #5fc74d;" href="https://www.jotform.com/?utm_source=emailfooter&amp;utm_medium=email&amp;utm_term=82074704523958&amp;utm_content=email_footer_banner&amp;utm_campaign=autoresponder_email_footer_new_cf_old">Create a JotForm</a>
                        </td>
                    </tr></tbody></table></td>
                    </tr><tr><td height="30">
                    </td>
                    </tr></tbody></table></body>`,
            "dirty": "",
            "from": "JotPoll",
            "hideEmptyFields": "1",
            "html": "1",
            "lastQuestionID": "2",
            "name": "Autoresponder 1",
            "pdfattachment": "",
            "replyTo": "",
            "sendDate": "",
            "sendOnEdit": "",
            "subject": "We have received your response for {form_title}",
            "to": "{email}",
            "type": "autorespond",
        }

        const properties = {
            "emails":[emailProps],
            "formType":"cardForm",
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
            defaultTime: "current",
            description: "",
            format: "yyyymmdd",
            labelAlign: "Auto",
            // limitDate: "{"days":{"monday":"true","tuesday":"true","wednesday":"true","thursday":"true","friday":"true","saturday":"true","sunday":"true"},"future":"true","past":"true","custom":"false","ranges":"false","start":"","end":""}",
            liteMode: "Yes",
            minAge: "13",
            name: "date",
            onlyFuture: "No",
            order: "3",
            qid: "3",
            readonly: "No",
            required: "No",
            startWeekOn: "Monday",
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

        const formObject = {
            "properties":properties,
            "properties[title]":`{DailyRoutine} ${this.state.title}`,
            "questions[0][type]": "control_head" ,
            "questions[0][text]":`${this.state.title}`,
            "questions[0][order]":1,
            "questions[0][name]":"Header",
            "questions[1][name]":`Description`,
            "questions[1][type]":`control_text`,
            "questions[1][text]":`${this.state.description}`,
            "questions[1][order]":2,
            "questions[2]":date,
            "questions[3][type]":`control_textarea`,
            "questions[3][text]":`Notes`,
            "questions[3][order]":"4",
            "questions[3][qid]":"4",
            "questions[3][cols]":`40`,
            "questions[3][name]":"notes",
            // "questions[3][name]":"submit",
            // "questions[3][text]":"Submit",
            // "questions[3][type]":"control_button",
            // "questions[3][order]":"4",
            // "questions[3][qid]":"4",
        };
        console.log(this.state.title,this.state.description);
        console.log(formObject);

        // window.JF.createForm(formObject,(resp) => {console.log(resp)},(err)=>console.log(err));
        axios({
            method: 'POST',
            url: 'http://api.jotform.com/form?apiKey=85dcbbcdad0b18a508112756e56fdcfb',
            data: qs.stringify(formObject),
        }).then((response)=>console.log(response));        // 85dcbbcdad0b18a508112756e56fdcfb
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
