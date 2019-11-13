import React from 'react'
import {App} from '../app/app'
import {BrowserRouter} from 'react-router-dom'
import {render,queryByRole,fireEvent} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe(
  'modal',
  ()=>
  {
    it('when clicking outside modal disappears',
  ()=>
{
  const {queryByTestId}=render(<BrowserRouter><App/></BrowserRouter>)
  fireEvent.click(queryByTestId('menu'))
  fireEvent.click(queryByTestId('todos-link'))
  fireEvent.click(queryByRole(queryByTestId('addTodo'),'button'))
  fireEvent.click(queryByTestId('modal'))
  should.not.exist(queryByTestId('modal'))
})
afterEach(cleanupAndRestoreRoute)
  }
)
