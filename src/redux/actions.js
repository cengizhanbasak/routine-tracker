export const setAPIKey = key => ({
    type: 'SET_APIKEY',
    apikey: key
})

export const setRoutinesList = list => ({
    type: 'SET_ROUTINESLIST',
    list
})

export const setInactiveRoutinesList = list => ({
    type: 'SET_INACTIVE_ROUTINESLIST',
    list
})

export const setActiveRoutine = (id) => ({
    type: 'SET_ACTIVE_ROUTINE',
    id
})

export const logIn = () => ({
    type: 'LOG_IN'
})

export const logOut = () => ({
    type: 'LOG_OUT'
})

export const setUser = user => ({
    type: 'SET_USER',
    user
})
