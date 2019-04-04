import { ADD_LANES, CLEAR_LANES, LOADING_LANES } from "../../ActionTypes/Lanes";

export const lanes = (state = {}, action) => {
  switch (action.type) {
    case LOADING_LANES:
      return { ...state, fetchingLanes: action.fetchingLanes };
    case ADD_LANES:
      return { ...state, laneList: action.laneList };
    case CLEAR_LANES:
      return { ...state, laneList: [] };
    default:
      return state;
  }
};
