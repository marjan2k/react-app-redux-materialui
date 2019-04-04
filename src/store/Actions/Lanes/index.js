import mockResponse from './mockResponse.json';
import { ADD_LANES, CLEAR_LANES, LOADING_LANES } from "../../ActionTypes/Lanes";

export const addLanes = laneList => ({
  type: ADD_LANES,
  laneList,
});

export const clearLanes = () => ({
  type: CLEAR_LANES,
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
    // dispatch(addLanes(responseBody));
    dispatch(addLanes(mockResponse.data.lanes));
  } catch (error) {
    console.error(error);
    dispatch(clearLanes());
  } finally {
    dispatch(fetchingLanes(false));
  }
};
