import React from 'react'
import {App} from '../app/app'
import {BrowserRouter as Router} from 'react-router-dom'
import {render} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe('header',
()=>
{
  it('has a menu',
()=>
{
  const {queryByTestId}=render(<Router><App/></Router>)
  should.exist(queryByTestId('menu'))
})
afterEach(cleanupAndRestoreRoute)
})
