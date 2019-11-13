import React from 'react'
import {App} from '../app/app'
import {BrowserRouter} from 'react-router-dom'
import {render,fireEvent,queryByTestId,queryByRole} from '@testing-library/react'
import {cleanupAndRestoreRoute} from '../../testUtils/cleanupAndRestoreRoute'

export default
()=>
describe(
  'checkAllConfirm',
  ()=>
  {
    it('is a button, when pressed, checks all todos',
    ()=>
    {
      const {container,queryAllByTestId}=render(<BrowserRouter><App/></BrowserRouter>)
      fireEvent.click(queryByTestId(container,'menu'))
      fireEvent.click(queryByTestId(container,'todos-link'))
      fireEvent.click(queryByRole(queryByTestId(container,'addTodo'),'button'))
      fireEvent.change(queryByRole(queryByTestId(container,'modal'),'textbox'),
        {target:{value:'todo1'}})
      fireEvent.click(queryByRole(queryByTestId(container,'modal'),'button'))
      fireEvent.click(queryByRole(queryByTestId(container,'addTodo'),'button'))
      fireEvent.change(queryByRole(queryByTestId(container,'modal'),'textbox'),
        {target:{value:'todo2'}})
      fireEvent.click(queryByRole(queryByTestId(container,'modal'),'button'))
      const todos=queryAllByTestId('todo')
      const length=todos.length
      length.should.be.equal(2)
      should.exist(queryByTestId(todos[0],'check'))
      should.exist(queryByTestId(todos[1],'check'))
      should.not.exist(queryByTestId(todos[0],'checked'))
      should.not.exist(queryByTestId(todos[1],'checked'))
      const buttonCheckAll=queryByRole(queryByTestId(container,'checkAll'),'button')
      should.exist(buttonCheckAll)
      fireEvent.click(buttonCheckAll)
      fireEvent.click(queryByRole(queryByTestId(container,'modal'),'button'))
      should.not.exist(queryByTestId(todos[0],'check'))
      should.not.exist(queryByTestId(todos[1],'check'))
      should.exist(queryByTestId(todos[0],'checked'))
      should.exist(queryByTestId(todos[1],'checked'))
    })
afterEach(cleanupAndRestoreRoute)
  }
)
