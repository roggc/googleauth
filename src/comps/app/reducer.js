import combine from '../../redux/combineReducers'
import menu from '../menu/reducer'
import contentCard from '../contentCard/reducer'
import paginateControl from '../paginateControl/reducer'

const app=
(val={},act)=>
{
  switch (act.type) {
    case 'APP_SETUSER':
      val={
        ...val,
        user:act.val
      }
      return val
    case 'APP_LOGOUT':
      val={
        ...val,
        user:null
      }
      return val
    default:
      return val
  }
}

export default
combine(
  {
    app,
    menu,
    contentCard,
    paginateControl
  }
)
