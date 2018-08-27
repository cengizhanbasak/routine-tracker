const axios = require('axios');
const qs = require('qs');

class RequestHandler {

    constructor(key){
        this.apiKey=key;
    }

    setAPIKey(key){
        this.apiKey=key;
    }
    getAPIKey(){
        return this.apiKey;
    }

    async logIn(loginInfo){
        let response={}
        var baseURL = 'https://api.jotform.com/user/login';

        await axios({
            method: 'POST',
            url: baseURL,
            data: qs.stringify(loginInfo)
        }).then((resp)=> response=resp)
        return response
    }

    logOut(){
        axios({
            method: 'GET',
            url: 'https://api.jotform.com/v1/user/logout'
        }).then((resp)=>console.log(resp));
    }

    async sendSubmission(id,note){
        let submission = new FormData();
        submission.set('submission[4]',note);

        var baseURL = 'http://api.jotform.com/form/'

        await axios({
            method: 'POST',
            url: baseURL+id+'/submissions?apiKey='+this.apiKey,
            data: submission
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

        axios({
            method: 'POST',
            url: baseURL+this.apiKey,
            data: qs.stringify(data),
        }).then((response)=>{
            if(response.status === 200){
                window.OneSignal.getUserId().then((id)=>{
                    var days = {'Monday':1,'Tuesday':2,'Wednesday':3,'Thursday':4,'Friday':5,'Saturday':6,'Sunday':7}
                    let hoursInfo = JSON.parse(data["questions[4]"].text);
                    Object.keys(hoursInfo).forEach((day)=> {
                        var date = new Date();
                        date.setDate(date.getDate() + (days[day] + 7 - date.getDay()) % 7);
                        date.setHours(hoursInfo[day].substr(0,2),hoursInfo[day].substr(3,2))
                        var notificationData = {
                          "app_id": "eb163d0d-1c91-4c62-8875-c3fd70489838",
                          "include_player_ids": [id],
                          "data": {"foo": "bar"},
                          "send_after": date.toString(),
                          "contents": {"en": "You may have a routine coming on!"}
                        }
                        axios({
                            method: 'POST',
                            url: 'https://onesignal.com/api/v1/notifications',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Basic MjY2MDcyMjktMjA3Yy00ODIwLWFjMDQtMmY0MmNlNGEzY2Qz'
                            },
                            data: notificationData
                        }).then((resp)=>console.log(resp))
                    })
                })
            }
        });

    }

    async removeForm(id){
        var baseURL = 'https://api.jotform.com/form/'
        await axios({
            method: 'DELETE',
            url: baseURL+id+'?apiKey='+this.apiKey
        })
    }

    async activateForm(id){
        var baseURL = 'https://api.jotform.com/form/'
        await axios({
            method: 'POST',
            data: qs.stringify({properties:{status:'ENABLED'}}),
            url: baseURL+id+'/properties?apiKey='+this.apiKey
        })
    }
}

var requestHandler = new RequestHandler('');
export default requestHandler;
