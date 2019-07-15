import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { AppState } from '../../../store/store';
import { connect } from 'react-redux';
import { Car } from '../../../store/types';

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
    if(!carDetail) {
      fetchCarDetail()
    }
  })

  if(!carDetail) return(<div>Car not found</div>)

  return (
    <div>
      CarDetail
      <div>{carDetail.color}</div>
        <Link to='/cars'>go to search page</Link>
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