import React from 'react'
import {Modal} from '../modal/modal'
import {CheckAllConfirm} from '../checkAllConfirm/checkAllConfirm'

export const CheckAll=
({redux1,redux2})=>
{
  const checkAllClick=
  e=>redux2.dispatch({type:'MODAL_SET_SHOW',val:true})
  const el=
  <div data-testid='checkAll'>
    <button onClick={checkAllClick}>checkAll</button>
    <Modal redux={redux2}>
      <CheckAllConfirm redux={redux1}/>
    </Modal>
  </div>
  return el
}
