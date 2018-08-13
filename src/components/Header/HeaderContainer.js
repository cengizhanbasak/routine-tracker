import Header from './index.js';
import { logOut } from '../../redux/actions';
import { connect } from 'react-redux';


const mapStateToProps = (state,props) => ({
        user: state.user,
        loggedIn: state.loggedIn
});

const mapDispatchToProps = ( dispatch, props ) => ({
    logOut: () => dispatch(logOut()),

})

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header);

export default HeaderContainer;
