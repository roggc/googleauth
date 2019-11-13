export default
(val={},act)=>
{
  switch(act.type)
  {
    case 'MENU_TOGGLE_POPUP':
      val=
      {
        ...val,
        showPopup:!val.showPopup
      }
      return val
    case 'MENU_HIDE_POPUP':
      val=
      {
        ...val,
        showPopup:false
      }
      return val
    default:
      return val
  }
}
