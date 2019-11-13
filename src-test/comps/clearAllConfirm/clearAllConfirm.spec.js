import React from 'react'
import {App} from '../app/app'
import {BrowserRouter} from 'react-router-dom'
import {render,fireEvent,queryByRole} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe(
  'clearAllConfirm',
  ()=>
  {
    it('is a button, when pressed deletes all todos, and modal disappear',
  ()=>
{
  const {queryByTestId,queryAllByTestId}=render(<BrowserRouter><App/></BrowserRouter>)
  fireEvent.click(queryByTestId('menu'))
  fireEvent.click(queryByTestId('todos-link'))
  should.not.exist(queryByTestId('modal'))
  const addTodo=queryByRole(queryByTestId('addTodo'),'button')
  fireEvent.click(queryByRole(queryByTestId('addTodo'),'button'))
  const modal=queryByTestId('modal')
  should.exist(modal)
  const button=queryByRole(modal,'button')
  const input=queryByRole(modal,'textbox')
  let text='todo 1'
  fireEvent.change(input,{target:{value:text}})
  fireEvent.click(button)
  const length1=queryAllByTestId('todo').length
  length1.should.be.equal(1)
  fireEvent.click(queryByRole(queryByTestId('addTodo'),'button'))
  text='todo 2'
  fireEvent.change(queryByRole(queryByTestId('modal'),'textbox'),{target:{value:text}})
  fireEvent.click(queryByRole(queryByTestId('modal'),'button'))
  const length2=queryAllByTestId('todo').length
  length2.should.be.equal(2)
  should.not.exist(queryByTestId('modal'))
  fireEvent.click(queryByRole(queryByTestId('clearAll'),'button'))
  should.exist(queryByTestId('modal'))
  fireEvent.click(queryByRole(queryByTestId('clearAllConfirm'),'button'))
  should.not.exist(queryByTestId('modal'))
  const length3=queryAllByTestId('todo').length
  length3.should.be.equal(0)
})
afterEach(cleanupAndRestoreRoute)
  }
)
