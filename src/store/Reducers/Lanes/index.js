import {
  ADD_ALL_LANES,
  ADD_OUTBIDDING_LANES,
  ADD_WATCHING_LANES,
  ADD_WINNING_LANES,
  LOADING_LANES
} from "../../ActionTypes/Lanes";


const initialState = {
  fetchingLanes: false,
  laneList: [],
  outbidLanes: [],
  isWatchingLanes: [],
  isWinningLanes: [],
};

export const lanes = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_LANES:
      return { ...state, fetchingLanes: action.fetchingLanes };
    case ADD_ALL_LANES:
      return { ...state, laneList: action.laneList };
    case ADD_OUTBIDDING_LANES:
      return { ...state, outbidLanes: action.outbidLanes };
    case ADD_WATCHING_LANES:
      return { ...state, isWatchingLanes: action.isWatchingLanes };
    case ADD_WINNING_LANES:
      return { ...state, isWinningLanes: action.isWinningLanes };
    default:
      return state;
  }
};
