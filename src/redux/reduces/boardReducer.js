import * as act from '../actions/constants';
const initialState = [];

export default function boardReducer(state = initialState, action) {
	switch (action.type) {
		case act.ADD_LANE:
			return [ ...state, action.payload ];

		default:
			return state;
	}
}
