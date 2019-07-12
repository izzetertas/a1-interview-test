import React from 'react'
import { Link } from 'react-router-dom'
import './CarListItem.scss'

type CarListItemProps = {
  loading?: boolean
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

export default function CarListItem(props: CarListItemProps) {
  if(props.loading) {
    return (
      <div className='CarListItem-container'>
        <div className='CarListItem-image'>
        </div>
        <div className='CarListItem-content'>
          <div className='CarListItem-loading_long_and_height'>&nbsp;</div>
          <div className='CarListItem-loading_long'>&nbsp;</div>
          <div className='CarListItem-loading_short'>&nbsp;</div>
        </div>
      </div>
    )
  }

  const getDetailInfo = () => {
    return `Stock # ${props.stockNumber} - ${props.mileage.number} ${props.mileage.unit} - ${props.fuelType} - ${props.color}`
  }

  return (
    <div className='CarListItem-container'>
      <div className='CarListItem-image'>
        <img src={props.pictureUrl} />
      </div>
      <div className='CarListItem-content'>
        <div className='CarListItem-content__header'>{props.manufacturerName} {props.modelName}</div>
        <div>{getDetailInfo()}</div>
        <div className='CarListItem-details'>
          <Link to={`/car/${props.stockNumber}`}>View details</Link>
        </div>
      </div>
    </div>
  )
}