import React from 'react'
import {App} from './app'
import {render} from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe(
  'app',
  ()=>
  {
    it(
      'contains header, content, and footer',
      ()=>
      {
        const {queryByTestId}= render(<Router><App/></Router>)
        should.exist(queryByTestId('header'))
        should.exist(queryByTestId('content'))
        should.exist(queryByTestId('footer'))
      }
    )
    afterEach(cleanupAndRestoreRoute)
  }
)
