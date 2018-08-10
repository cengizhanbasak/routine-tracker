const axios = require('axios');
const qs = require('qs');

function getRequest(url,data={}){

    let response = {}

    axios.get({
        url:url,
        data:data
    }).then((resp) => response=resp )

    return response;
}


function postRequest(url,data){
    axios({
        method: 'POST',
        url: url,
        data: qs.stringify(data),
    }).then((response)=>console.log(response));
}

export { postRequest, getRequest };
