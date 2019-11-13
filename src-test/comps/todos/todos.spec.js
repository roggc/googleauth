import React from 'react'
import {Todos} from './todos'
import {render,fireEvent} from '@testing-library/react'
import {App} from '../app/app'
import {BrowserRouter as Router} from 'react-router-dom'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe(
  'todos',
  ()=>
  {
    it('appears when clicking in route todos from menu',
    ()=>
    {
        const {queryByRole,queryByTestId}=render(<Router><App/></Router>)
        fireEvent.click(queryByTestId('menu'))
        fireEvent.click(queryByTestId('todos-link'))
        should.exist(queryByTestId('todos'))
    })
    it('has buttons add todo, clear all, check all',
  ()=>
{
  const {queryByTestId}=render(<Router><App/></Router>)
  fireEvent.click(queryByTestId('menu'))
  fireEvent.click(queryByTestId('todos-link'))
  should.exist(queryByTestId('addTodo'))
  should.exist(queryByTestId('clearAll'))
  should.exist(queryByTestId('checkAll'))
})
    afterEach(cleanupAndRestoreRoute)
  }
)
