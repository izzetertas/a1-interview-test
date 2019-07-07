import React from 'react';
const logo = require('../../../public/images/logo.png');
import './Logo.scss';

class Logo extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} className='Logo__img' />
      </div>
    )
  }
};

export default Logo;