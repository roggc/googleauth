export default
(val={},act)=>
{
  switch (act.type) {
    case 'MENU_SETSHOW':
      val={
        ...val,
        show:act.val
      }
      return val
    case 'MENU_TOGGLESHOW':
      val={
        ...val,
        show:!val.show
      }
      return val
    default:
      return val
  }
}
