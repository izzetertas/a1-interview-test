import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
// import CarDetail from '../../components/CarDetail';
import axios from 'axios';

import './Cars.scss'
import CarDetail from '../../components/CarDetail';
import Button from '../../components/Button';
import CarListItem from '../../components/CarListItem';
import Select from '../../components/Select';

const Cars = () => {
  axios({ url: '/api/colors'})
    .then(data => console.log(data))
  return (
    <div className='cars-wrapper'>
      <Header />
      <main className='main-container'>
        <Switch>
          <Route exact path="/" component={CarSearch} />
          <Route exact path="/cars" component={CarSearch} />
          <Route exact path="/car/:id" component={CarDetail} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default Cars;

export const CarSearch = () => {
  const colors = ['red', 'blue', 'green', 'black', 'yellow', 'white', 'silver']
  const manufacturers = ['Audi', 'Bmw', 'Chrysler']

  return (
    <div className='cars-content'>
      <div className='cars-content__filter'>
        <Select
          title='Color'
          options={['All Car color', ...colors]}
          onChange={value => {console.log('selected color', value)}}
        /> 
        <Select
          title='Manifacturer'
          options={['All Manifacturers', ...manufacturers]}
        /> 
        <Button onClick={() => console.log('oldu')} text='Filter' />
      </div>
      <div className='cars-content__result'>
        <div>
        <CarListItem
          loading={true}
          color='red'
          fuelType='Petrol'
          manufacturerName='Mercedes'
          mileage={{ number: 2323, unit: 'km' }}
          modelName='Benz Vito Tourer'
          pictureUrl='http:/google.com'
          stockNumber={4562322}
        />

        <CarListItem
          color='red'
          fuelType='Petrol'
          manufacturerName='Mercedes'
          mileage={{ number: 2323, unit: 'km' }}
          modelName='Benz Vito Tourer'
          pictureUrl='http:/google.com'
          stockNumber={4562322}
        />
        </div>
      </div>
      <Button state='selected' text='Selected' />
    </div>
  )
}