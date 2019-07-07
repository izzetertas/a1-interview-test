import * as React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import './index.scss'

export const Index = () => {
  return (
    <div className='cars-wrapper'>
      <Header />
      <main className='main-container'></main>
      <Footer />
    </div>
  );
};
