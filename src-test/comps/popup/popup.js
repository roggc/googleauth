import React from 'react'
import {Link} from 'react-router-dom'

export const Popup=
({redux})=>
{
  const togglePopup=
  e=>
  redux.dispatch({type:'MENU_TOGGLE_POPUP'})
  const stopPropagation=
  e=>
  e.stopPropagation()
  const el=
  <div data-testid='popup' onClick={stopPropagation}>
    <div onClick={togglePopup}><Link to='/' data-testid='home-link'>home</Link></div>
    <div onClick={togglePopup}><Link to='/about' data-testid='about-link'>about</Link></div>
    <div onClick={togglePopup}><Link to='/todos' data-testid='todos-link'>todos</Link></div>
  </div>
  return el
}
