import React from 'react'

export const AddTodoConfirm=
({redux})=>
{
  const confirmAdd=
  e=>
  {
    if(redux.state.addTodo.input!=='')
    {
      redux.dispatch({type:'TODOS_ADD',val:redux.state.addTodo.input})
    }
  }
  const el=
  <div data-testid='addTodoConfirm'>
    <button onClick={confirmAdd}>add</button>
  </div>
  return el
}
