import HabitForm from './index.js';
import { connect } from 'react-redux';


const mapStateToProps = (state,props) => ({
    active: state.activeRoutine,
    routines: state.routinesList,
    mode: props.mode
});

const mapDispatchToProps = ( dispatch, props ) => ({

})

const HabitFormContainer = connect(mapStateToProps,mapDispatchToProps)(HabitForm);

export default HabitFormContainer;
