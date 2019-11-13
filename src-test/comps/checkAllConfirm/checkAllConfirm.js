import React from 'react'

export const CheckAllConfirm=
({redux})=>
{
  const checkAllClick=
  e=>redux.dispatch({type:'TODOS_CHECKALL'})
  const el=
  <div data-testid='checkAllConfirm'>
    <button onClick={checkAllClick}>check all</button>
  </div>
  return el
}
