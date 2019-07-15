import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import Pagination from '../../components/Pagination/Pagination';
import CarListItem, { CarListItemContentLoader } from '../../components/CarListItem';
import Select from '../../components/Select';
import { CarsSearchParams, Car } from '../../../store/types';
import { AppState } from '../../../store/store';
import { Dispatch } from 'redux';
import { carsRequest } from '../../../store/actions'

import './Cars.scss'

type DispatchFromProps = {
  searchCars: (params: CarsSearchParams) => void 
}

type CarsSearchProps = {
   totalRecord: number
   params: CarsSearchParams
   loading: boolean
   errorMessage: string
   records: Car[]
   colors: string[]
   manufacturers: string[]
   sortBy: string[]
} & DispatchFromProps


export const CarsSearch = (props: CarsSearchProps) => {
  const [color, setColor] = useState(props.params.color)
  const [manufacturer, setManufacturer] = useState(props.params.manufacturer)
  const [sortBy, setSortBy] = useState(props.params.sortBy)

  useEffect(() => handleFilterClick(), [sortBy])

  const handleFilterClick = () => {
    props.searchCars(
      {
        color,
        manufacturer,
        pageNumber: 1,
        pageSize: 10,
        sortBy
      }
    )
  }

  const handlePaginationClick = (pageNumber: number) => {
     props.searchCars(
      {
        color,
        manufacturer,
        pageNumber,
        pageSize: 10,
        sortBy
      }
    )
  }

  const renderCars = () => {
    if(props.loading) {
      return Array.from({length: props.params.pageSize}, (v, i) => 
        (<CarListItemContentLoader key={i} />)
      )
    }

    return props.records.map((record: Car) => (
      <CarListItem
        key={record.stockNumber}
        {...record}
        loading={props.loading}
      />
    ))
  }

  return (
    <div className='cars-content'>
      <div className='cars-content__filter'>
        <Select
          title='Color'
          options={props.colors}
          onChange={value => setColor(value)}
          defaultValue={color}
        /> 
        <Select
          title='Manufacturer'
          options={props.manufacturers}
          onChange={value => setManufacturer(value)}
          defaultValue={manufacturer}
        /> 
        <Button onClick={handleFilterClick} text='Filter' />
      </div>
      <div className='cars-content__result'>
        <div className='cars-content__header'>
          <div>
            <h2>Available Cars</h2>
            <div>Showing 10 of 100 results</div>
            
          </div>
          <div>
            <Select
              title='Sort by'
              options={props.sortBy}
              onChange={value => setSortBy(value)}
              defaultValue={sortBy}
            /> 
          </div>
        </div>
        <div className='cars-content__data'>
          {renderCars()}
        </div>
        <Pagination 
          pageSize={props.params.pageSize} 
          pageNumber={props.params.pageNumber} 
          totalResult={props.totalRecord}
          onClick={handlePaginationClick}
        />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => {
  return {
    searchCars: (params: CarsSearchParams) => dispatch(carsRequest(params))
  }
}

const mapStateToProps = (state: AppState) => {
  const { params, records, totalRecord, loading, errorMessage } = state.cars
  return {
    loading,
    errorMessage,
    params,
    records,
    totalRecord,
    ...state.filters
  }
}

const Cars = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsSearch)

export default Cars