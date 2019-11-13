import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import * as S from '../../styled/styled'
import {Modal} from '../modal/modal'

export const Menu=
({redux,...rest})=>
{
  const toggleMenu=e=>redux.dispatch({type:'MENU_TOGGLESHOW'})
  return (
    <S.MenuBorder onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} color='grey'/>
      {
        redux.state.menu.show&&
        <Modal>
          {rest.children}
        </Modal>
      }
    </S.MenuBorder>
  )
}
