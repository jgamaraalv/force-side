import { Reducer } from "redux";

import {
  FETCH_PEOPLE,
  FETCH_PEOPLE_ERROR,
  FETCH_PEOPLE_SUCCESS,
  FetchPeopleErrorAction,
} from "./actions";
import HomeModuleState from "./types";

const getInitialState = (): HomeModuleState => ({
  people: {},
});

const homeReducer: Reducer<HomeModuleState> = (
  state = getInitialState(),
  action
) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        people: {
          error: undefined,
          status: "loading",
        },
      };

    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        people: {
          ...state.people,
          ...action.payload.people,
          error: undefined,
          status: "loaded",
        },
      };

    case FETCH_PEOPLE_ERROR:
      return {
        ...state,
        people: {
          ...state.people,
          ...(action as FetchPeopleErrorAction).payload,
          status: "error",
        },
      };

    default:
      return state;
  }
};

export default homeReducer;
