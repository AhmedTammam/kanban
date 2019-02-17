import { ADD_LANE, ADD_NOTE } from './constants';

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
