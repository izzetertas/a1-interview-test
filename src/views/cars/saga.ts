import axios from 'axios';
import { put, takeLatest, call, select } from 'redux-saga/effects'
import qs from 'querystring'
import { carsLoaded, carsLoadError } from '../../../store/actions';

export function* carsRequestAsync() {
  try {
    const { cars: { params } } = yield select()
    const queryObj = {
      page: params.pageNumber,
      color: (params.color !== 'All car colors') ? params.color: null,
      manufacturer: (params.manufacturer !== 'All manufacturers') ? params.manufacturer : null,
      sort: params.sortBy === 'Mileage - Descending' ? 'des' : ( params.sortBy === 'Mileage - Ascending' ? 'asc' : '' ) 
    }
    const query = qs.stringify(queryObj)
    const { data: { cars, totalCarsCount } } = yield call(axios.get, `/api/cars?${query}`)
    yield put(carsLoaded(cars, totalCarsCount))
  } catch (error) {
    yield put(carsLoadError(error))
  }
}

export default function* watchCars() {
  yield takeLatest('CARS_REQUEST', carsRequestAsync)
}
