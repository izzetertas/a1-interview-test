import { combineReducers } from 'redux'
import carsReducer from '../store/reducers/carsReducer'
import filtersReducer from '../store/reducers/filtersReducer'

export const rootReducer = combineReducers({
  cars: carsReducer,
  filters: filtersReducer
})

export type AppState = ReturnType<typeof rootReducer> 
