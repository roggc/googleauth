import React from 'react'
import {Switch,Route} from 'react-router-dom'
import {Home} from '../home/home'
import {About} from '../about/about'
import {Todos} from '../todos/todos'

export const Content=
(props)=>
{
  const el=
  <div>
    <Switch>
      <Route path='/' exact render={()=><Home/>}/>
      <Route path='/about' render={()=><About/>}/>
      <Route path='/todos' render={()=><Todos {...props}/>}/>
    </Switch>
  </div>
  return el
}
