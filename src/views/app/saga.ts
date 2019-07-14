import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios';

import { filtersLoad } from '../../../store/actions';

export function* filtersLoadAsync() {
  try {
    const { data: { colors } } = yield call(axios.get, '/api/colors')
    const { data: { manufacturers } } = yield call(axios.get, '/api/manufacturers')

    yield put(filtersLoad({
      colors: ['All car colors', ...colors],
      manufacturers: ['All manufacturers', ...manufacturers.map((item: any) => item.name)],
      sortBy: ['None', 'Mileage - Ascending', 'Mileage - Descending']
    }))
  } catch (error) {}
}

export default function* watchFiltersLoad() {
  yield takeLatest('FILTERS_REQUEST', filtersLoadAsync)
}
