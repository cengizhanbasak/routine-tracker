import {setRoutinesList, logIn, logOut, setUser} from './actions';

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
