import { all, fork } from "redux-saga/effects";
import pokimonSaga from "./sagas/pokimonSaga";
import pokimonDetailsSaga from "./sagas/pokimonDetailsSaga";
export default function* rootSaga() {
  yield all([fork(pokimonSaga), fork(pokimonDetailsSaga)]);
}
