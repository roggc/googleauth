export default
(val={},act)=>
{
  switch (act.type)
  {
    case '':
      val=
      {
        ...val
      }
      return val
    default:
      return val
  }
}
