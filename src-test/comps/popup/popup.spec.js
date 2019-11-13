import React from 'react'
import {App} from '../app/app'
import {BrowserRouter as Router} from 'react-router-dom'
import {render,fireEvent} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe(
  'popup',
  ()=>
  {
    it('when clicked a link hides popup',
  ()=>
{
  const {queryByTestId}=render(<Router><App/></Router>)
  should.not.exist(queryByTestId('home-link'))
  fireEvent.click(queryByTestId('menu'))
  should.exist(queryByTestId('home-link'))
  fireEvent.click(queryByTestId('home-link'))
  should.not.exist(queryByTestId('home-link'))
})
    it('when clicked in popup outside link does not hide popup',
  ()=>
{
    const {queryByTestId}=render(<Router><App/></Router>)
    should.not.exist(queryByTestId('popup'))
    fireEvent.click(queryByTestId('menu'))
    fireEvent.click(queryByTestId('popup'))
    should.exist(queryByTestId('popup'))
})
it('when clicked outside popup hides popup',
()=>
{
    const {queryByTestId}=render(<Router><App/></Router>)
    fireEvent.click(queryByTestId('menu'))
    fireEvent.click(queryByTestId('app'))
    should.not.exist(queryByTestId('popup'))
})
    it('has home and about links that redirects to respectives routes in content component',
  ()=>
{
  const {queryByTestId}=render(<Router><App/></Router>)
  should.exist(queryByTestId('home'))
  should.not.exist(queryByTestId('about'))
  fireEvent.click(queryByTestId('menu'))
  fireEvent.click(queryByTestId('about-link'))
  should.not.exist(queryByTestId('home'))
  should.exist(queryByTestId('about'))
  fireEvent.click(queryByTestId('menu'))
  fireEvent.click(queryByTestId('home-link'))
  should.exist(queryByTestId('home'))
  should.not.exist(queryByTestId('about'))
})
afterEach(cleanupAndRestoreRoute)
  }
)
