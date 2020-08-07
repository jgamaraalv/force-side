import { all, put, takeLatest } from "redux-saga/effects";

import { fetchData, FetchDataResponse } from "../../../fetchers/people";
import { FETCH_PEOPLE, fetchPeopleError, fetchPeopleSuccess } from "./actions";

export function* fetchPeople() {
  try {
    const [luke, darth]: FetchDataResponse[] = yield fetchData();
    let people;

    luke.time > darth.time ? (people = luke.data) : (people = darth.data);

    yield put(fetchPeopleSuccess(people));
  } catch (e) {
    yield put(fetchPeopleError(e));
  }
}

export default function* saga() {
  yield all([takeLatest(FETCH_PEOPLE, fetchPeople)]);
}
