import { FilterState, FiltersActionType } from '../types'
import { FILTERS_LOAD } from '../constants'

const initialFiltersState: FilterState = {
  colors: ['All car color'],
  manufacturers: ['All Manufacturers'],
  sortBy: ['None', 'Mileage - Ascending', 'Mileage - Descending']
}

export default function filtersReducer(state = initialFiltersState, action: FiltersActionType) : FilterState {
  switch (action.type) {
    case FILTERS_LOAD:
      return {
        ...action.payload
      }
    default:
      break;
  }
  return state
}