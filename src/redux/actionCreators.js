import {setRoutinesList, logIn, logOut, setUser} from './actions';

export const logInThunk = () => (dispatch) => {
    dispatch(logIn());
}

export const logOutThunk = () => (dispatch) => {
    dispatch(logOut());
}

export const setRoutinesListThunk = (list) => (dispatch) => {
    dispatch(setRoutinesList(list));
}

export const setUserThunk = (user) => (dispatch) => {
    dispatch(setUser(user));
}
