import { all, put, takeLatest } from "redux-saga/effects";

import { fetchData, FetchDataResponse } from "../../../fetchers/people";
import { FETCH_PEOPLE, fetchPeopleError, fetchPeopleSuccess } from "./actions";

export function* fetchPeople() {
  try {
    const [luke, darth]: FetchDataResponse[] = yield fetchData();
    const people: FetchDataResponse["data"] =
      luke.time > darth.time
        ? { ...darth.data, force: "darkness" }
        : { ...luke.data, force: "light" };

    yield put(fetchPeopleSuccess(people));
  } catch (e) {
    yield put(fetchPeopleError(e));
  }
}

export default function* saga() {
  yield all([takeLatest(FETCH_PEOPLE, fetchPeople)]);
}
