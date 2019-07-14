import { all, fork } from 'redux-saga/effects'

import appSaga from '../src/views/app/saga'
import carsSaga from '../src/views/cars/saga'

export default function* rootSaga() {
  yield all([
    fork(appSaga),
    fork(carsSaga),
  ])
}