import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/Button';
import Pagination from '../../../components/Pagination/Pagination';
import CarListItem, { CarListItemContentLoader } from '../../../components/CarListItem';
import Select from '../../../components/Select';
import { CarsSearchParams, Car } from '../../../../store/types';
import { AppState } from '../../../../store/store';
import { Dispatch } from 'redux';
import { carsRequest } from '../../../../store/actions'

import './NavFilter.scss'

type DispatchFromProps = {
  searchCars: (params: CarsSearchParams) => void
}

type NavFilterProps = {
  params: CarsSearchParams
  colors: string[]
  manufacturers: string[]
} & DispatchFromProps


export const NavFilterComponent = (props: NavFilterProps) => {
  const [color, setColor] = useState(props.params.color)
  const [manufacturer, setManufacturer] = useState(props.params.manufacturer)

  const handleFilterClick = () => {
    props.searchCars(
      {
        ...props.params,
        color,
        manufacturer,
        pageNumber: 1,
      }
    )
  }

  return (
    <div className='NavFilter-container'>
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
      <div className='NavFilter-button'>
        <Button onClick={handleFilterClick} text='Filter' />
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
  const { params } = state.cars
  return {
    params,
    ...state.filters
  }
}

const NavFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavFilterComponent)

export default NavFilter