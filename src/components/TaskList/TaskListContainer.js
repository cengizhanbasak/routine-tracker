import TaskList from './index.js';
import { SetInactiveRoutinesList, SetRoutinesList, SetActiveRoutine } from '../../redux/actionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state,props) => ({
        routineForms: state.routinesList,
        inactiveForms: state.inactivesList
});

const mapDispatchToProps = ( dispatch, props ) => bindActionCreators({
    setRoutines: (list) => SetRoutinesList(list),
    setActiveRoutine: (list) => SetActiveRoutine(list),
    setInactiveRoutines: (list) => SetInactiveRoutinesList(list),
}, dispatch)

const TaskListContainer = connect(mapStateToProps,mapDispatchToProps)(TaskList);

export default TaskListContainer;
