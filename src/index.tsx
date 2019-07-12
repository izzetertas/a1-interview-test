import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Cars from './views/cars/Cars';
import GlobalStylesProvider from './components/utilities/GlobalStylesProvider';

render((
  <GlobalStylesProvider>
    <BrowserRouter>
      <Cars />
    </BrowserRouter>
  </GlobalStylesProvider>
), document.getElementById('root')
);
