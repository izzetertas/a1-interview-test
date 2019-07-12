import React from 'react';
import { Link } from 'react-router-dom'; 

class CarDetail extends React.Component {
  render() {
    return (
      <div>
        CarDetail
        <Link to='/cars'>go to search page</Link>
      </div>
    )
  }
};

export default CarDetail;