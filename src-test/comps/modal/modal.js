import React from 'react'

export const Modal=
({children,redux})=>
{
  const modalDisappears=
  e=>
  redux.dispatch({type:'MODAL_SET_SHOW',val:false})
  const el=
  redux.state.modal.show&&
  <div data-testid='modal' onClick={modalDisappears}>
  {children}
  </div>
  return el
}
