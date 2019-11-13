export default
(val={},act)=>
{
  switch (act.type)
  {
    case 'MODAL_SET_SHOW':
      val=
      {
        ...val,
        show:act.val
      }
      return val
    default:
      return val
  }
}
