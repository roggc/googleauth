import React from 'react'
import {About} from './about'
import {render} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe(
  'about',
  ()=>
  {
    it('should has text',
  ()=>
{
    const {queryByText}=render(<About/>)
    should.exist(queryByText('about page'))
})
 afterEach(cleanupAndRestoreRoute)
  }
)
