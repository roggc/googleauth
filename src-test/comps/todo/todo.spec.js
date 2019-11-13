import React from 'react'
import {Todo} from './todo'
import {App} from '../app/app'
import {BrowserRouter} from 'react-router-dom'
import {render,fireEvent,queryByRole,queryByTestId} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe(
  'todo',
  ()=>
  {
    it('has icons trash and check, and field with text',
  ()=>
{
  const {container,queryAllByTestId}=render(<BrowserRouter><App/></BrowserRouter>)
  fireEvent.click(queryByTestId(container,'menu'))
  fireEvent.click(queryByTestId(container,'todos-link'))
  fireEvent.click(queryByRole(queryByTestId(container,'addTodo'),'button'))
  const text= 'This is new todo'
  fireEvent.change(queryByRole(queryByTestId(container,'modal'),'textbox'),{target:{value:text}})
  fireEvent.click(queryByRole(queryByTestId(container,'addTodoConfirm'),'button'))
  const todos=queryAllByTestId('todo')
  const length=todos.length
  length.should.be.equal(1)
  const todo=todos[length-1]
  should.exist(queryByTestId(todo,'trash'))
  should.exist(queryByTestId(todo,'check'))
  should.exist(queryByTestId(todo,'val'))
})
it('when pressed trash, todo disappears',
()=>
{
const {container,queryAllByTestId}=render(<BrowserRouter><App/></BrowserRouter>)
fireEvent.click(queryByTestId(container,'menu'))
fireEvent.click(queryByTestId(container,'todos-link'))
fireEvent.click(queryByRole(queryByTestId(container,'addTodo'),'button'))
const text= 'This is new todo'
fireEvent.change(queryByRole(queryByTestId(container,'modal'),'textbox'),{target:{value:text}})
fireEvent.click(queryByRole(queryByTestId(container,'addTodoConfirm'),'button'))
const todos=queryAllByTestId('todo')
const length=todos.length
length.should.be.equal(1)
const todo=todos[length-1]
fireEvent.click(queryByRole(queryByTestId(todo,'trash'),'button'))
const lengthAfter=queryAllByTestId('todo').length
lengthAfter.should.be.equal(0)
})
it('when pressed check, todo gets checked and button check disappears',
()=>
{
const {container,queryAllByTestId}=render(<BrowserRouter><App/></BrowserRouter>)
fireEvent.click(queryByTestId(container,'menu'))
fireEvent.click(queryByTestId(container,'todos-link'))
fireEvent.click(queryByRole(queryByTestId(container,'addTodo'),'button'))
const text= 'This is new todo'
fireEvent.change(queryByRole(queryByTestId(container,'modal'),'textbox'),{target:{value:text}})
fireEvent.click(queryByRole(queryByTestId(container,'addTodoConfirm'),'button'))
const todos=queryAllByTestId('todo')
const length=todos.length
length.should.be.equal(1)
const todo=todos[length-1]
fireEvent.click(queryByRole(queryByTestId(todo,'check'),'button'))
should.not.exist(queryByTestId(todo,'check'))
should.exist(queryByTestId(todo,'checked'))
})
afterEach(cleanupAndRestoreRoute)
  }
)
