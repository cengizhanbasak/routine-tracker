import Main from './index.js';
import { logOut } from '../../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state,props) => ({
        loggedIn: state.loggedIn,

});

const mapDispatchToProps = ( dispatch, props ) => ({

})

const MainContainer = connect(mapStateToProps,mapDispatchToProps)(Main);

export default withRouter(MainContainer);
