import React from 'react'
import {Modal} from '../modal/modal'
import {AddTodoConfirm} from '../addTodoConfirm/addTodoConfirm'

export const AddTodo=
({redux})=>
{
  const showModal=
  e=>
  redux.dispatch({type:'MODAL_SET_SHOW',val:true})
  const inputChange=
  e=>
  redux.dispatch({type:'ADDTODO_SET_INPUT',val:e.target.value})
  const inputClick=
  e=>e.stopPropagation()
  const el=
  <div data-testid='addTodo'>
    <button onClick={showModal}>add</button>
    <Modal redux={redux}>
      <input type='text' onChange={inputChange}
        value={redux.state.addTodo.input} onClick={inputClick}/>
      <AddTodoConfirm redux={redux}/>
    </Modal>
  </div>
  return el
}
