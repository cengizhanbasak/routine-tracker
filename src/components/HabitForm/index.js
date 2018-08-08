import React, { Component } from 'react';
import './HabitForm.css';

class HabitForm extends Component {

    render()
    {
        let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
        return (
            <div className="habitFormPage">
                <form>
                    <label>Topic: </label><br/>
                    <input className="input_name" type="text"/><br/>
                    <label>Description: </label><br/>
                    <textarea className="input_descr"/><br/>
                    <label>Remind me at: </label><br/>
                    <input type="time" className="time"/><br/>
                    <label>Active Days: </label><br/>
                    { days.map((day)=> (<span><input type="checkbox" name={day}/> {day} <br/></span>)) }
                    <input type="submit" value="Add Habit" />
                </form>
            </div>
        )
    }


}
export default HabitForm;
