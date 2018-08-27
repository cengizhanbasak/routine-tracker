import StatsView from './index.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state,props) => ({
        user: state.user,
        loggedIn: state.loggedIn,
        routinesList: state.routinesList
});

const mapDispatchToProps = ( dispatch, props ) => ({

})

const StatsViewContainer = connect(mapStateToProps,mapDispatchToProps)(StatsView);

export default withRouter(StatsViewContainer);
