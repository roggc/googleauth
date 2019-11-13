import React from 'react'
import {Menu} from '../menu/menu'

export const Header=
(props)=>
{
  const el=
  <div>
    <div>
      <Menu {...props}/>
    </div>
  </div>
  return el
}
