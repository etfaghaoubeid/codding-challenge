import { all, call, put, takeLatest } from "redux-saga/effects";
import { getPokimonList } from "../services/pokimonServices";
import {
  fetchinPokimonsFail,
  fetchinPokimonsSuccess,
} from "../actions/pokimonActions";
import { FETCHING_POKIMONS } from "../constants/actionTypes";
import { Pokimon } from "../types";
export function* fetchPokimonsSaga() {
  try {
    const response: Pokimon[] = yield call(getPokimonList);
    yield put(fetchinPokimonsSuccess({ pokimons: response, isLoading: false }));
  } catch (error: any) {
    yield put(
      fetchinPokimonsFail({
        isLoading: false,
        errorMessage: error,
      })
    );
  }
}
export default function* pokimonSaga() {
  yield all([takeLatest(FETCHING_POKIMONS, fetchPokimonsSaga)]);
}
