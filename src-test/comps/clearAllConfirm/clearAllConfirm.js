import React from 'react'

export const ClearAllConfirm=
({redux})=>
{
  const clearAllClick=
  e=>
  redux.dispatch({type:'TODOS_DELETEALL'})
  const el=
  <div data-testid='clearAllConfirm'>
    <button onClick={clearAllClick}>clear all</button>
  </div>
  return el
}
