export default
(val={},act)=>
{
  let todos
  switch (act.type)
  {
    case 'TODOS_ADD':
      todos=val.todos.filter(todo=>true)
      todos.push({text:act.val,done:false})
      val=
      {
        ...val,
        todos
      }
      return val
    case 'TODOS_DELETE':
      todos=val.todos.filter(
        (todo,i)=>
        {
          if(i===act.val)
          {
            return false
          }
          else
          {
            return true
          }
        }
      )
      val=
      {
        ...val,
        todos
      }
      return val
    case 'TODOS_CHECK':
      todos=val.todos.filter(todo=>true)
      todos.some(
        (todo,i)=>
        {
          if(i===act.val)
          {
            todo.done=true
            return true
          }
        }
      )
      val=
      {
        ...val,
        todos
      }
      return val
    case 'TODOS_DELETEALL':
      val=
      {
        ...val,
        todos:[]
      }
      return val
    case 'TODOS_CHECKALL':
      todos=val.todos.filter(todo=>true)
      todos.forEach(
        todo=>todo.done=true
      )
      val=
      {
        ...val,
        todos
      }
      return val
    default:
      return val
  }
}
