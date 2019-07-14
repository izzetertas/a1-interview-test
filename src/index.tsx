import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import App from './views/app/App';
import GlobalStylesProvider from './components/utilities/GlobalStylesProvider';

import rootSaga from '../store/rootSaga'
import { rootReducer } from '../store/store'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

render((
  <GlobalStylesProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </GlobalStylesProvider>
), document.getElementById('root')
);
