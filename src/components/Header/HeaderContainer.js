import Header from './index.js';
import { logOut } from '../../redux/actions';
import { bindActionCreators } from 'redux';
import { logOutThunk } from '../../redux/actionCreators';
import { connect } from 'react-redux';


const mapStateToProps = (state,props) => ({
        user: state.user,
        loggedIn: state.loggedIn
});

const mapDispatchToProps = ( dispatch, props ) => bindActionCreators({
    logOut: () => logOutThunk(),

}, dispatch)

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header);

export default HeaderContainer;
