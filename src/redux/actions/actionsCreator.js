import { ADD_LANE, ADD_NOTE, LANE_NAME_CHANGE } from './constants';

export const addLane = (name) => {
	return {
		type: ADD_LANE,
		payload: name
	};
};

export const addNote = (name) => {
	return {
		type: ADD_NOTE,
		payload: name
	};
};

export const laneNameChange = (newName) => {
	return {
		type: LANE_NAME_CHANGE,
		payload: newName
	};
};
