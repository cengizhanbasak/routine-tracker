import {setRoutinesList, logIn, logOut, setUser, setActiveRoutine} from './actions';

export const LogIn = () => (dispatch) => {
    dispatch(logIn());
}

export const LogOut = () => (dispatch) => {
    dispatch(logOut());
}

export const SetRoutinesList = (list) => (dispatch) => {
    dispatch(setRoutinesList(list));
}

export const SetUser = (user) => (dispatch) => {
    dispatch(setUser(user));
}

export const SetActiveRoutine = (id) => (dispatch) => {
    dispatch(setActiveRoutine(id))
}
