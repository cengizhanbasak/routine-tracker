import React, { Component } from 'react';
import './HabitForm.css';

class HabitForm extends Component {

    render()
    {
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
                    <input type="checkbox" name="Monday"/>Monday<br/>
                    <input type="checkbox" name="Tuesday"/>Tuesday<br/>
                    <input type="checkbox" name="Wednesday"/>Wednesday<br/>
                    <input type="checkbox" name="Thursday"/>Thursday<br/>
                    <input type="checkbox" name="Friday"/>Friday<br/>
                    <input type="checkbox" name="Saturday"/>Saturday<br/>
                    <input type="checkbox" name="Sunday"/>Sunday<br/>
                    <input type="submit" value="Add Habit" />
                </form>
            </div>
        )
    }


}
export default HabitForm;
