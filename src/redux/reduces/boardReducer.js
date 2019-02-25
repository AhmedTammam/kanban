import { ADD_LANE, LANE_NAME_CHANGE } from '../actions/constants';
const initialState = [];

export default function boardReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_LANE:
			return [ ...state, action.payload ];
		case LANE_NAME_CHANGE:
			const lane = state.filter((lane) => lane.id === action.payload.id);
			lane[0].name = action.payload.name;
			// const newState = [ ...lane, action.payload.name ];
			return [ ...state, lane ];
			console.log(lane);

		default:
			return state;
	}
}
