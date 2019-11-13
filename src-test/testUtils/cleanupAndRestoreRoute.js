import {cleanup,render,fireEvent} from '@testing-library/react'
import {App} from '../comps/app/app'
import {BrowserRouter} from 'react-router-dom'
import React from 'react'

export const cleanupAndRestoreRoute=
()=>
{
  cleanup()
  const {queryByTestId}=render(<BrowserRouter><App/></BrowserRouter>)
  fireEvent.click(queryByTestId('menu'))
  fireEvent.click(queryByTestId('home-link'))
  cleanup()
}
