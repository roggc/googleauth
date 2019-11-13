import React from 'react'
import {AddTodoConfirm} from './addTodoConfirm'
import {render,fireEvent,queryByRole,queryByText} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'
import {App} from '../app/app'
import {BrowserRouter} from 'react-router-dom'

export default
()=>
describe(
  'addTodoConfirm',
  ()=>
  {
    it('has a button',
  ()=>
{
  const {queryByRole}=render(<AddTodoConfirm/>)
  should.exist(queryByRole('button'))
})
it('when pressed adds a new todo to the todos when text is present in the input field and modal disappears',
()=>
{
const {queryByTestId,queryAllByTestId}=render(<BrowserRouter><App/></BrowserRouter>)
fireEvent.click(queryByTestId('menu'))
fireEvent.click(queryByTestId('todos-link'))
const todos=queryAllByTestId('todo')
fireEvent.click(queryByRole(queryByTestId('addTodo'),'button'))
const addTodoConfirm=queryByTestId('addTodoConfirm')
should.exist(addTodoConfirm)
const input=queryByRole(queryByTestId('modal'),'textbox')
const text='This is new todo'
fireEvent.change(input,{target:{value:text}})
fireEvent.click(queryByRole(addTodoConfirm,'button'))
const todosAfter=queryAllByTestId('todo')
const val=todosAfter.length-todos.length
val.should.be.equal(1)
should.exist(queryByText(todosAfter[todosAfter.length-1],text))
should.not.exist(queryByTestId('modal'))
})
afterEach(cleanupAndRestoreRoute)
  }
)
