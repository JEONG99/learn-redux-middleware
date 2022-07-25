import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";
import sample from "./sample";

const rootReducer = combineReducers({
  counter,
  sample,
});

export function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootReducer;
