import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Switch, Route } from 'react-router-dom'

import { filtersRequest } from '../../../store/actions';

import Header from '../layout/Header'
import Footer from '../layout/Footer'
import CarDetail from '../../components/CarDetail'
import Cars from '../cars'


import './App.scss'

type PropsFromDispatch = {
  filtersRequest: () => void 
}

type AppProps = PropsFromDispatch

const AppComponent = (props: AppProps) => {
  useEffect(() => {
    props.filtersRequest()
  }, [])

  return (
    <div className='app-wrapper'>
      <Header />
      <main className='main-container'>
        <Switch>
        <Route exact path="/" component={Cars} />
          <Route path="/cars" component={Cars} />
          <Route path="/car/:stockNumber" component={CarDetail} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => {
  return {
    filtersRequest: () => dispatch(filtersRequest())
  }
}

const App = connect(
  null,
  mapDispatchToProps
)(AppComponent)

export default App
