import React from 'react'
import {Modal} from '../modal/modal'
import {ClearAllConfirm} from '../clearAllConfirm/clearAllConfirm'

export const ClearAll=
({redux1,redux2})=>
{
  const clearAllClick=
  e=>redux2.dispatch({type:'MODAL_SET_SHOW',val:true})
  const el=
  <div data-testid='clearAll'>
    <button onClick={clearAllClick}>clearAll</button>
    <Modal redux={redux2}>
      <ClearAllConfirm redux={redux1}/>
    </Modal>
  </div>
  return el
}
