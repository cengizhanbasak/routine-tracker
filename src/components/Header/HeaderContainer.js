import Header from './index.js';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actionCreators';
import { connect } from 'react-redux';


const mapStateToProps = (state,props) => ({
        user: state.user,
        loggedIn: state.loggedIn
});

const mapDispatchToProps = ( dispatch, props ) => ({
    actions: bindActionCreators(actions,dispatch)
})

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header);

export default HeaderContainer;
