const initialState = {
  apikey: '',
  routinesList: [],
}

const routineApp = (state = [], action) => {
    if(typeof state === 'undefined'){
        return initialState;
    }
    switch (action.type) {
        case 'SET_APIKEY':
            return Object.assign({},state,{apikey:action.key})
            break;
        case 'SET_ROUTINESLIST':
            return Object.assign({},state,{routinesList:action.list})
            break;
        default:
            return state;

    }

}

export default routineApp;
