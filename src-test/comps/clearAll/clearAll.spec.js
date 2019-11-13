import React from 'react'
import {ClearAll} from './clearAll'
import {App} from '../app/app'
import {BrowserRouter} from 'react-router-dom'
import {render,fireEvent,queryByRole} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe(
  'clearAll',
  ()=>
  {
it('is a button, when pressed, opens a modal which contains a button to confirm clear all',
()=>
{
  const {queryByTestId}=render(<BrowserRouter><App/></BrowserRouter>)
  fireEvent.click(queryByTestId('menu'))
  fireEvent.click(queryByTestId('todos-link'))
  should.not.exist(queryByTestId('modal'))
  fireEvent.click(queryByRole(queryByTestId('clearAll'),'button'))
  should.exist(queryByTestId('modal'))
  should.exist(queryByTestId('clearAllConfirm'))
}
)
afterEach(cleanupAndRestoreRoute)
  }
)
