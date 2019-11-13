import React from 'react'
import useReducer from '../../hooks/useReducer'
import {Content} from '../content/content'
import {Header} from '../header/header'
import {Footer} from '../footer/footer'
import state from './state'
import reducer from './reducer'

export const App=
()=>
{
  const reduxes=
  [
    useReducer(reducer,state),
    useReducer(reducer,state),
    useReducer(reducer,state)
  ]
  const el=
  <div data-testid='app'>
      <div data-testid='header'>
        <Header redux={reduxes[0]}/>
      </div>
      <div data-testid='content'>
        <Content reduxes={reduxes} />
      </div>
      <div data-testid='footer'><Footer/></div>
  </div>
  return el
}
