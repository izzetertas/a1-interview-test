import { CARS_REQUEST, CARS_SUCCESS, CARS_FAILED, FILTERS_LOAD } from './constants';

export interface Car {
  stockNumber: number
  manufacturerName: string
  modelName: string
  color: string
  mileage: {
    number: number
    unit: string
  }
  fuelType: string
  pictureUrl: string
}

export interface Manufacturer {
  name: string
  uuid: string
  models: Model[]
}

export interface Model {
  uuid: string
  name: string
}

export interface CarsSearchParams {
  color: string
  manufacturer: string
  sortBy: string
  pageNumber: number
  pageSize: number
}

export interface CarState {
  params: CarsSearchParams,
  records: Car[]
  totalRecord: number
  errorMessage: string | null
  loading: boolean
}

interface CarsRequestAction {
  type: typeof CARS_REQUEST
  params: CarsSearchParams
}

interface CarsSuccessAction {
  type: typeof CARS_SUCCESS
  payload: {
    records: Car[],
    totalRecord: number
  }
}

interface CarsFailureAction {
  type: typeof CARS_FAILED
  errorMessage: string
}

export interface FilterState {
  colors: string []
  manufacturers: string []
  sortBy?: string[]
}

export type FiltersActionType = {
  type: typeof FILTERS_LOAD
  payload: FilterState
}
