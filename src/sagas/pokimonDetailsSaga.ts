import {
  all,
  call,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { getPokimonByName } from "../services/pokimonServices";
import {
  fetchinPokimonDetailsFail,
  fetchinPokimonDetailsSuccess,
} from "../actions/pokimonActions";
import { FETCHING_POKIMON_DETAILS } from "../constants/actionTypes";
import { Pokimon } from "../types";
export function* fetchPokimonDetailsSaga() {
  try {
    const { name } = yield take(FETCHING_POKIMON_DETAILS);
    console.log(name, "name1111");
    const response: Pokimon = yield call(getPokimonByName, name);
    yield put(
      fetchinPokimonDetailsSuccess({ pokimon: response, isLoading: false })
    );
  } catch (error: any) {
    console.log("err ", error);

    yield put(
      fetchinPokimonDetailsFail({
        isLoading: false,
        errorMessage: error,
      })
    );
  }
}
export default function* pokimonDetailsSaga() {
  yield all([takeEvery(FETCHING_POKIMON_DETAILS, fetchPokimonDetailsSaga)]);
}

// import { all, call, put, takeLatest } from "redux-saga/effects";
// import { getPokimonList } from "../services/pokimonServices";
// import {
//   fetchinPokimonsFail,
//   fetchinPokimonsSuccess,
// } from "../actions/pokimonActions";
// import { FETCHING_POKIMONS } from "../constants/actionTypes";
// import { Pokimon } from "../types";
// export function* fetchPokimonsSaga() {
//   try {
//     const response: Pokimon[] = yield call(getPokimonList);
//     yield put(fetchinPokimonsSuccess({ pokimons: response, isLoading: false }));
//   } catch (error: any) {
//     yield put(
//       fetchinPokimonsFail({
//         isLoading: false,
//         errorMessage: error,
//       })
//     );
//   }
// }
// export default function* pokimonSaga() {
//   yield all([takeLatest(FETCHING_POKIMONS, fetchPokimonsSaga)]);
// }
