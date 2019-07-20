import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../components/Logo';

import './NotFound.scss';

const NotFound = () => (
	<div className='NotFound-container'>
		<Logo />
		<h1>404 - Not Found</h1>
		<p>Sorry, the page you are looking for does not exist.</p>
		<p>You can always go back to the <Link to='/' className='NotFound-link'>homepage.</Link></p>
	</div>
)

export default NotFound;
