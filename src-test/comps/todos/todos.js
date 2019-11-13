import React from 'react'
import {AddTodo} from '../addTodo/addTodo'
import {ClearAll} from '../clearAll/clearAll'
import {CheckAll} from '../checkAll/checkAll'
import {Todo} from '../todo/todo'

export const Todos=
({reduxes})=>
{
  const el=
  <div data-testid='todos'>
    <AddTodo redux={reduxes[0]}/>
    <ClearAll redux1={reduxes[0]} redux2={reduxes[1]}/>
    <CheckAll redux1={reduxes[0]} redux2={reduxes[2]}/>
    <div>
      {
        reduxes[0].state.todos.todos.map(
          (todo,i)=>
          <Todo key={i} redux={reduxes[0]} i={i}/>
        )
      }
    </div>
  </div>
  return el
}
