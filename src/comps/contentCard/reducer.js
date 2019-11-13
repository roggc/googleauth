export default
(val={},act)=>
{
  switch (act.type) {
    case 'CONTENTCARD_SETSHOWLARGEIMG':
      val={
        ...val,
        showLargeImg:act.val
      }
      return val
    default:
      return val
  }
}
