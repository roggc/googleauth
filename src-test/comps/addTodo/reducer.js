export default
(val={},act)=>
{
  switch (act.type)
  {
    case 'ADDTODO_SET_INPUT':
      val=
      {
        ...val,
        input:act.val
      }
      return val
    default:
      return val
  }
}
