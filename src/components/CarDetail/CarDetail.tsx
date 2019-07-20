import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { AppState } from '../../../store/store';
import { connect } from 'react-redux';
import { Car } from '../../../store/types';
import Button from '.././Button'

import './CarDetail.scss';

interface CarDetailComponentProps {
  match: {
    params: {
      stockNumber: string
    }
  }
}

type DispatchFromProps = {
  carDetail: Car | null
  stockNumber1: number
}

type CarDetailProps = CarDetailComponentProps & DispatchFromProps

function CarDetailComponent(props: CarDetailProps) {
  const [carDetail, setCarDetail] = useState(props.carDetail)
  useEffect(() => {
    const fetchCarDetail = async () => {
      const result = await axios(`/api/cars/${props.match.params.stockNumber}`)
      setCarDetail(result.data.car)
    }
    if (!carDetail) {
      fetchCarDetail()
    }
  })

  if (!carDetail) return (<div>Car not found</div>)
  return (
    <div className='CarDetail-container'>
      <div className='CarDetail-img'></div>
      <div className='CarDetail-content'>
        <div className='CarDetail-detail'>
          <h1>{carDetail.manufacturerName} {carDetail.modelName}</h1>
          <h3>{`Stock # ${carDetail.stockNumber} - ${carDetail.mileage.number} ${carDetail.mileage.unit} - ${carDetail.fuelType} - ${carDetail.color}`}</h3>
          <p>
            This car is currently available and can ve delivered as soon as tomorrow morning.
            Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.
        </p>
        </div>
        <div className='CarDetail-favourite'>
          <p>If you like this car, click the button and save it in your collection of favourite items.</p>
          <div style={{ textAlign: 'right' }}>
            <Button text='Save' />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState, ownProps: CarDetailComponentProps) => ({
  carDetail: state.cars.records ? state.cars.records.find(car => car.stockNumber.toString() === ownProps.match.params.stockNumber) : null
})

const CarDetail = connect(
  mapStateToProps,
  null
)(CarDetailComponent)


export default CarDetail