import App from './index.js';
import * as actions from '../../redux/actionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state,props) => ({
        user: state.user,
        loggedIn: state.loggedIn
});

const mapDispatchToProps = ( dispatch, props ) => ({
    actions: bindActionCreators(actions, dispatch)
})

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default withRouter(AppContainer);
