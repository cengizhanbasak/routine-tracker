import TaskList from './index.js';
import { setRoutinesListThunk } from '../../redux/actionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state,props) => ({
        routineForms: state.routinesList
});

const mapDispatchToProps = ( dispatch, props ) => bindActionCreators({
    setRoutines: (list) => setRoutinesListThunk(list),
}, dispatch)

const TaskListContainer = connect(mapStateToProps,mapDispatchToProps)(TaskList);

export default TaskListContainer;
