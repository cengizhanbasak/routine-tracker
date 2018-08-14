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
            loading:true
            }

    }
    componentDidMount(){
        requestHandler.getQuestions(this.props.activeRoutine).then((resp)=>{
            this.setState({questions:resp,loading:false})
        })
    }

    render(){
        if(this.props.loggedIn){
            if(this.state.loading){
                return (<h1>Please Wait...</h1>)
            }else{
                var markup = this.props.htmlToRender
                var sanitize = function(htmlString){
                  return marked(toMarkdown(htmlString), {sanitize: true})
                }

                return (
                    <div className="routine-page">
                        <h1>{this.state.info.title.substr(15)}</h1>
                        <p dangerouslySetInnerHTML={{__html: sanitize(this.state.questions[2].text) }}></p>
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
