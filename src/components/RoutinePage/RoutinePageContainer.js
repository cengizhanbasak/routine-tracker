import RoutinePage from './index.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state,props) => ({
        activeRoutine: state.activeRoutine,
        routinesList: state.routinesList.concat(state.inactivesList),
        loggedIn: state.loggedIn,
});

const mapDispatchToProps = ( dispatch, props ) => bindActionCreators({

}, dispatch)

const RoutinePageContainer = connect(mapStateToProps,mapDispatchToProps)(RoutinePage);

export default RoutinePageContainer;
