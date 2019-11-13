import React from 'react'
import {App} from '../app/app'
import {BrowserRouter} from 'react-router-dom'
import {render,fireEvent,queryByRole,queryByTestId} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe(
  'checkAll',
  ()=>
  {
it('is a button, when clicked, opens a modal to confirm check all todos',
()=>
{
  const {container,queryAllByTestId}=render(<BrowserRouter><App/></BrowserRouter>)
  fireEvent.click(queryByTestId(container,'menu'))
  fireEvent.click(queryByTestId(container,'todos-link'))
  const buttonCheckAll=queryByRole(queryByTestId(container,'checkAll'),'button')
  should.exist(buttonCheckAll)
  fireEvent.click(buttonCheckAll)
  const modal=queryByTestId(container,'modal')
  should.exist(modal)
  should.exist(queryByTestId(modal,'checkAllConfirm'))
})
afterEach(cleanupAndRestoreRoute)
  }
)
