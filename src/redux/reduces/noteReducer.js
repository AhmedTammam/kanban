import { ADD_NOTE } from '../actions/constants';
const initialState = [];

export default function boardReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NOTE:
			return [ ...state, action.payload ];

		default:
			return state;
	}
}
