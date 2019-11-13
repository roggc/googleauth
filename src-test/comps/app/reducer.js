import combine from '../../redux/combineReducers'
import addTodo from '../addTodo/reducer'
import todos from '../todos/reducer'
import modal from '../modal/reducer'
import menu from '../menu/reducer'

const app=
(val={},act)=>
{
  switch(act.type)
  {
    default:
      return val
  }
}

export default
combine(
  {
    app,
    addTodo,
    todos,
    modal,
    menu
  }
)
