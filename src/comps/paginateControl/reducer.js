export default
(val={},act)=>
{
  switch (act.type) {
    case 'PAGINATECONTROL_SETPAGENUMBER':
      val={
        ...val,
        pageIndex:act.val
      }
      return val
    default:
      return val
  }
}
