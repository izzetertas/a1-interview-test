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

export default class CarListItem extends React.PureComponent<CarListItemProps> {
  getDetailInfo = () => {
    return `Stock # ${this.props.stockNumber} - ${this.props.mileage.number} ${this.props.mileage.unit} - ${this.props.fuelType} - ${this.props.color}`
  }

  render() {
    if (this.props.loading) {
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
    return (
      <div className='CarListItem-container'>
        <div className='CarListItem-image'>
          <img src={this.props.pictureUrl} />
        </div>
        <div className='CarListItem-content'>
          <div className='CarListItem-content__header'>{this.props.manufacturerName} {this.props.modelName}</div>
          <div>{this.getDetailInfo()}</div>
          <div className='CarListItem-details'>
            <Link to={`/car/${this.props.stockNumber}`}>View details</Link>
          </div>
        </div>
      </div>
    )
  }
}

export const CarListItemContentLoader = ()  => {
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
