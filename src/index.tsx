import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Index } from './views/cars/Index';
import GlobalStylesProvider from './components/utilities/GlobalStylesProvider';


render((
  <GlobalStylesProvider>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </GlobalStylesProvider>
), document.getElementById('root')
);
