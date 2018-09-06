import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import requestHandler from '../RequestHandler';

export default class NotificationHandler extends Component {

    constructor(props){
        super(props);

        this.state={ redirect:false };

    }

    componentDidMount(){
        let date = this.props.location.search.substr(1)
        let x = date.split('&');
        let params = {};
        for (var i = 0; i < x.length; i++) {
    		let pair = x[i].split('=');
    		params[pair[0]] = decodeURIComponent(pair[1]);
    	}
        console.log(params);

        requestHandler.getFormProperties(params['formid']).then((resp)=>{
            if(resp.data.content.status === 'ENABLED'){
                requestHandler.ScheduleNotificationToNextWeek(params['id'],params['date']).then(()=>{
                    this.setState({redirect:true});
                })
            }else{
                this.setState({redirect:true});
            }
        })

    }

    render(){
        return (
            <div>
                <h1>Scheduling Next Notification...</h1>
                {
                    this.state.redirect
                    &&
                    (<Redirect to="/" />)
                }
            </div>
        )
    }
}
