import axios from 'axios';
import {put, takeLatest, all, call} from 'redux-saga/effects';
import {CONSTANTS} from '../../utils';
import {Types} from '../action';

const api = axios.create({
  baseURL: process.env.REACT_APP_IP,
  timeout: 60000,
});
interface IResponse {
  data?: any;
}
function* fetchTransaction() {
  try {
    const res: IResponse = yield call(api.get, CONSTANTS.API);
    console.log(res.data);
    yield put({type: Types.GET_TRANSACTION_SUCCESS, payload: res});
  } catch (e) {
    yield put({
      type: Types.GET_TRANSACTION_FAILURE,
      payload: console.log(e),
    });
  }
}

function* actionWatcher() {
  yield takeLatest(Types.GET_TRANSACTION_REQUEST, fetchTransaction);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
    // yield takeLatest(Types.GET_TRANSACTION_REQUEST, fetchTransaction),
  ]);
}
