import TaskList from './index.js';
import { setRoutinesList } from '../../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state,props) => ({
        routineForms: state.routinesList
});

const mapDispatchToProps = ( dispatch, props ) => ({
    setRoutines: (list) => dispatch(setRoutinesList(list)),
})

const TaskListContainer = connect(mapStateToProps,mapDispatchToProps)(TaskList);

export default TaskListContainer;
