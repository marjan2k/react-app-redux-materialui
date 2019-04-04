import mockResponse from './mockResponse.json';
import {
  ADD_ALL_LANES,
  ADD_OUTBIDDING_LANES,
  ADD_WATCHING_LANES,
  ADD_WINNING_LANES,
  LOADING_LANES
} from "../../ActionTypes/Lanes";
import { filterLanes } from "../../../utility/filterLanes";

export const addAllLanes = laneList => ({
  type: ADD_ALL_LANES,
  laneList,
});

export const addWinningLanes = isWinningLanes => ({
  type: ADD_WINNING_LANES,
  isWinningLanes,
});

export const addWatchingLanes = isWatchingLanes => ({
  type: ADD_WATCHING_LANES,
  isWatchingLanes,
});

export const addOutbiddingLanes = outbidLanes => ({
  type: ADD_OUTBIDDING_LANES,
  outbidLanes,
});

export const fetchingLanes = fetchingLanes => ({
  type: LOADING_LANES,
  fetchingLanes,
});

export const getLanes = () => async dispatch => {
  try {
    dispatch(fetchingLanes(true));
    // const url = '';
    // const response = await fetch(url);
    // const responseBody = await response.json();
    // dispatch(addAllLanes(responseBody));
    const { lanes: laneList } = mockResponse.data;
    dispatch(addAllLanes(laneList));
    dispatch(addWinningLanes(filterLanes(laneList, 'isWinning')));
    dispatch(addWatchingLanes(filterLanes(laneList, 'isWatching')));
    dispatch(addOutbiddingLanes(filterLanes(laneList, 'isOutbid')));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(fetchingLanes(false));
  }
};
