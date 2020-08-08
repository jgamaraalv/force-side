import { Reducer } from "redux";

import { CLOSE_MODAL, OPEN_MODAL, OpenModalAction } from "./actions";
import { ModalState } from "./types";

const getInitialState = (): ModalState => ({
  component: null,
  open: false,
});

const modalReducer: Reducer<ModalState> = (
  state = getInitialState(),
  action
) => {
  switch (action.type) {
    case CLOSE_MODAL:
      return { ...state, component: null, open: false, urlParams: null };

    case OPEN_MODAL:
      return {
        ...state,
        ...(action.payload as OpenModalAction["payload"]),
        open: true,
      };

    default:
      return state;
  }
};

export default modalReducer;
