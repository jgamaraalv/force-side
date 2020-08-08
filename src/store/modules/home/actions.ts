import { Action } from "redux";

import HomeModuleState from "./types";

export const FETCH_PEOPLE = Symbol("FETCH_PEOPLE");
export const FETCH_PEOPLE_ERROR = Symbol("FETCH_PEOPLE_ERROR");
export const FETCH_PEOPLE_SUCCESS = Symbol("FETCH_PEOPLE_SUCCESS");

export function fetchPeople(): Action<typeof FETCH_PEOPLE> {
  return { type: FETCH_PEOPLE };
}

export interface FetchPeopleErrorAction
  extends Action<typeof FETCH_PEOPLE_ERROR> {
  payload: { error: Error };
}

export function fetchPeopleError(
  error: FetchPeopleErrorAction["payload"]["error"]
): FetchPeopleErrorAction {
  return { type: FETCH_PEOPLE_ERROR, payload: { error } };
}

export interface FetchPeopleSuccessAction
  extends Action<typeof FETCH_PEOPLE_SUCCESS> {
  payload: { data: NonNullable<HomeModuleState["people"]["data"]> };
}

export function fetchPeopleSuccess(
  data: FetchPeopleSuccessAction["payload"]["data"]
): FetchPeopleSuccessAction {
  return { type: FETCH_PEOPLE_SUCCESS, payload: { data } };
}
