import React,{useRef} from 'react'
import {Popup} from '../popup/popup'
import {useOuterClick} from '../../hooks/useOuterClick'

export const Menu=
({redux})=>
{
  const menuRef=useRef(null)
  useOuterClick(e=>redux.dispatch({type:'MENU_HIDE_POPUP'}),menuRef)
  const togglePopup=
  e=>
  redux.dispatch({type:'MENU_TOGGLE_POPUP'})
  const el=
  <div onClick={togglePopup} data-testid='menu' ref={menuRef}>
    <div data-testid='icon'>menu</div>
    {redux.state.menu.showPopup&& <Popup redux={redux}/>}
  </div>
  return el
}
