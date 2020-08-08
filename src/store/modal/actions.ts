import { Action } from "redux";

import { ModalState } from "./types";

export const CLOSE_MODAL = Symbol("CLOSE_MODAL");
export const OPEN_MODAL = Symbol("OPEN_MODAL");

export const closeModal = (): Action<typeof CLOSE_MODAL> => ({
  type: CLOSE_MODAL,
});

export interface OpenModalAction extends Action<typeof OPEN_MODAL> {
  payload: { component: NonNullable<ModalState["component"]> };
}

export const openModal = (
  component: OpenModalAction["payload"]["component"]
): OpenModalAction => ({
  payload: { component },
  type: OPEN_MODAL,
});
