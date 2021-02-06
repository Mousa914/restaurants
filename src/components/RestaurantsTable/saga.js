
import { RestaurantsTableActionsConstants } from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import RestaurantsTableActions from './actions'

function* fetchData(action){
  try {
    const res = yield call(fetch, action.uri, { method: 'GET' });
    const json = yield call([res, 'json']); //retrieve body of response
    yield put(RestaurantsTableActions.fetchDataSuccessAction(json));
  } catch (e) {
    console.log(e);
  }
}

function* RestaurantsTableSaga() {
  //using takeEvery, you take the action away from reducer to saga
  yield takeEvery(RestaurantsTableActionsConstants.FETCH_DATA, fetchData);
}

export default RestaurantsTableSaga;
