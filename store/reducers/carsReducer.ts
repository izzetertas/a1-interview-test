import { CarState, CarActionTypes } from '../types'
import { CARS_REQUEST, CARS_SUCCESS, CARS_FAILED } from '../constants'

const initialCarState: CarState = {
  params: {
    color: 'All car colors',
    manufacturer: 'All manufacturers',
    sortBy: 'None',
    pageNumber: 1,
    pageSize: 10,
  },
  records: [],
  totalRecord: 0,
  selectedRecord: null,
  errorMessage: null,
  loading: false
}

export default function carsReducer(state = initialCarState, action: CarActionTypes): CarState {
  switch (action.type) {
    case CARS_REQUEST:
      return {
        ...state,
        params: action.params,
        records: [],
        selectedRecord: null,
        loading: true,
        errorMessage: null
      }
    case CARS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    case CARS_FAILED:
      return {
        ...state,
        records: [],
        totalRecord: 0,
        selectedRecord: null,
        errorMessage: action.errorMessage,
        loading: false
      }
  }
  return state
}