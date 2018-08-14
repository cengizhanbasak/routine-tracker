const initialState = {
  routinesList: [],
  loggedIn: false,
  user: {}
}

const routineApp = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_ROUTINESLIST':
            return Object.assign({},state,{routinesList:action.list})
        case 'LOG_IN':
            return Object.assign({},state,{loggedIn:true})
        case 'LOG_OUT':
            return Object.assign({},state,{loggedIn:false, user:{},routinesList:[]})
        case 'SET_USER':
            return Object.assign({},state,{user:action.user})
        default:
            return state;
    }

}

export default routineApp;
