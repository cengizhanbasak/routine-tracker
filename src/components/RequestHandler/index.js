const axios = require('axios');
const qs = require('qs');

class RequestHandler {

    constructor(key){
        this.apiKey=key;
    }

    setAPIKey(key){
        this.apiKey=key;
    }

    sendSubmission(id,note){
        let submission = {
            '4':note
        }

        var baseURL = 'http://api.jotform.com/form/'

        axios({
            method: 'POST',
            url: baseURL+id+'/submissions?apiKey='+this.apiKey,
            data: qs.stringify(submission)
        }).then((resp)=>console.log(resp))
    }

    async getForms(){
        let response = {}

        var baseURL = 'http://api.jotform.com/user/forms?apiKey=';

        await axios({
            method: 'GET',
            url: baseURL+this.apiKey
        }).then((resp) => response=resp )
        return response;
    }

    async getSubmissions(id){
        let response = {};

        var baseURL = 'http://api.jotform.com/form/';

        await axios({
            method: 'GET',
            url: baseURL+id+'/submissions?apiKey='+this.apiKey
        }).then((resp)=> response=resp.data.content)

        return response
    }

    async getQuestions(id){
        let response = {};

        var baseURL = 'http://api.jotform.com/form/';

        await axios({
            method: 'GET',
            url: baseURL+id+'/questions?apiKey='+this.apiKey
        }).then((resp)=> response=resp)

        return response.data.content;
    }

    getRequest(url,data={}){

        let response = {}

        axios.get({
            url:url,
            data:data
        }).then((resp) => response=resp )
        return response;
    }


    postForm(data){
        var baseURL = 'http://api.jotform.com/form?apiKey='
        var notificationData = {
          "app_id": "eb163d0d-1c91-4c62-8875-c3fd70489838",
          "included_segments": ["All"],
          "data": {"foo": "bar"},
          "contents": {"en": "Your reminder is scheduled!"}
        }
        axios({
            method: 'POST',
            url: baseURL+this.apiKey,
            data: qs.stringify(data),
        }).then((response)=>{
            if(response.status === 200){
                window.OneSignal.sendSelfNotification("Routine Tracker","Your reminder is scheduled!")
            }
        });

    }

    async removeForm(id){
        var baseURL = 'https://api.jotform.com/form/'
        await axios({
            method: 'DELETE',
            url: baseURL+id+'?apiKey='+this.apiKey
        })
        return
    }
}

var requestHandler = new RequestHandler('85dcbbcdad0b18a508112756e56fdcfb');
export default requestHandler;
