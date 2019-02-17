import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import noteReducer from './noteReducer';

const Reducers = combineReducers({
	boards: boardReducer,
	notes: noteReducer
});

export default Reducers;
