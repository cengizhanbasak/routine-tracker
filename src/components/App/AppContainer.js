import App from './index.js';
import { setRoutinesList, logIn, logOut, setUser } from '../../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state,props) => ({
        user: state.user,
        loggedIn: state.loggedIn
});

const mapDispatchToProps = ( dispatch, props ) => ({
    setRoutines: (list) => dispatch(setRoutinesList(list)),
    logIn: ()=>dispatch(logIn()),
    logOut: ()=>dispatch(logOut()),
    setUser: (user)=> dispatch(setUser(user))
})

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default withRouter(AppContainer);
