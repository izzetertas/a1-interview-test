import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../components/Logo';
import './Header.scss'

class Header extends React.Component {
  render() {
    return (
      <header className='header-wrapper'>
        <Logo />
        <nav>
          <ul>
            <li>Purchase</li>
            <li><Link to="/favorites">My Orders</Link></li>
            <li>Sell</li>
          </ul>
        </nav>
      </header>
    )
  }
};

export default Header;