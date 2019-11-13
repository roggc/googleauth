import {useReducer} from 'react'

export default
(reducer,iState)=>
{
  const [state,dispatch]=useReducer(reducer,iState)
  return {state,dispatch}
}
