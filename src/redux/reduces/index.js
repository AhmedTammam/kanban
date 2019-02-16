import { combineReducers } from 'redux';
import boardReducer from './boardReducer';

const Reducers = combineReducers({
	boardRed: boardReducer
});

export default Reducers;
