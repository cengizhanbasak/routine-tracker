const axios = require('axios');
const qs = require('qs');

class RequestHandler {

    constructor(key){
        this.apiKey=key;
    }

    setAPIKey(key){
        this.apiKey=key;
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
        }).then((response)=>console.log(response));
    }

}

var requestHandler = new RequestHandler('85dcbbcdad0b18a508112756e56fdcfb');
export default requestHandler;
