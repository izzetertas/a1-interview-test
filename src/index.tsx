import * as React from 'react';
import { render } from 'react-dom';
import { Index } from './views/cars/Index';
import GlobalStylesProvider from './components/utilities/GlobalStylesProvider';

render((
  <GlobalStylesProvider>
    <Index />
  </GlobalStylesProvider>
 ), document.getElementById('root')
);
