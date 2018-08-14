import App from './index.js';
import { setRoutinesListThunk, logInThunk, logOutThunk, setUserThunk } from '../../redux/actionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state,props) => ({
        user: state.user,
        loggedIn: state.loggedIn
});

const mapDispatchToProps = ( dispatch, props ) => bindActionCreators({
    setRoutines: (list) => setRoutinesListThunk(list),
    logIn: ()=> logInThunk(),
    logOut: ()=> logOutThunk(),
    setUser: (user)=> setUserThunk(user)
}, dispatch)

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default withRouter(AppContainer);
