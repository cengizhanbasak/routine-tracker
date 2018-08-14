import Header from './index.js';
import { bindActionCreators } from 'redux';
import { LogOut } from '../../redux/actionCreators';
import { connect } from 'react-redux';


const mapStateToProps = (state,props) => ({
        user: state.user,
        loggedIn: state.loggedIn
});

const mapDispatchToProps = ( dispatch, props ) => bindActionCreators({
    logOut: () => LogOut(),

}, dispatch)

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header);

export default HeaderContainer;
