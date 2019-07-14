import { CARS_REQUEST, CARS_SUCCESS, CARS_FAILED, FILTERS_LOAD, FILTERS_REQUEST } from './constants';
import { CarActionTypes, CarsSearchParams, Car, FilterState, FiltersActionType } from './types'
import { Action } from 'redux';

export function carsRequest(params: CarsSearchParams): CarActionTypes {
  return {
    type: CARS_REQUEST,
    params
  }
}

export function carsLoaded(records: Car[], totalRecord: number): CarActionTypes {
  return {
    type: CARS_SUCCESS,
    payload: {
      records,
      totalRecord
    }
  }
}

export function carsLoadError(errorMessage: string): CarActionTypes {
  return {
    type: CARS_FAILED,
    errorMessage
  }
}

export function filtersRequest(): Action {
  return {
    type: FILTERS_REQUEST
  }
}

export function filtersLoad(payload: FilterState): FiltersActionType {
  return {
    type: FILTERS_LOAD,
    payload
  }
}