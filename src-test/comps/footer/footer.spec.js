import React from 'react'
import {Footer} from './footer'
import {render} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe
(
  'footer',
  ()=>
  {
    it
    (
      'has a text',
      ()=>
      {
        const {queryByText}=render(<Footer/>)
        should.exist(queryByText(/2019 roggc/i))
      }
    )
    afterEach(cleanupAndRestoreRoute)
  }
)
