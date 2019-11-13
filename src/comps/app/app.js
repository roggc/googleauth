import React,{useEffect} from 'react'
import * as firebase from "firebase/app"
import "firebase/auth"
import * as S from '../../styled/styled'
import styled from 'styled-components'
import state from './state'
import reducer from './reducer'
import useReducer from '../../hooks/useReducer'
import {LoggedInCard} from '../loggedinCard/loggedinCard'
import {WellComeCard} from '../wellcomeCard/wellcomeCard'
import {Menu} from '../menu/menu'
import {ContentCard} from '../contentCard/contentCard'
import {Switch,Route} from 'react-router-dom'
import withDraggableUpDown from '../withDraggableUpDown/withDraggableUpDown'
import img1 from '../../images/one.png'
import img2 from '../../images/two.png'
import img3 from '../../images/three.png'
import img4 from '../../images/four.png'
import img5 from '../../images/five.png'
import {PaginateControl} from '../paginateControl/paginateControl'

export const App=
()=>
{
  const DraggableContentCard=withDraggableUpDown(ContentCard)
  const redux1=useReducer(reducer,state)
  const redux2=useReducer(reducer,state)
  const redux3=useReducer(reducer,state)
  const redux4=useReducer(reducer,state)
  const redux5=useReducer(reducer,state)
  const redux6=useReducer(reducer,state)
  const redux7=useReducer(reducer,state)
  const redux8=useReducer(reducer,state)
  const redux9=useReducer(reducer,state)
  const redux10=useReducer(reducer,state)
  useEffect(
    ()=>
    {
      redux1.dispatch({type:'APP_SETUSER',val:JSON.parse(localStorage.getItem('user'))})
    },[]
  )
  const signInUser=e=>
  {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(d=> {
      localStorage.setItem('user',JSON.stringify(d.user))
      redux1.dispatch({type:'APP_SETUSER',val:d.user})
    })
    .catch(function(e) {
      if(e.code==='auth/web-storage-unsupported')
      {
        alert("For google authentication to work you must enable third party cookies in your browser configuration")
      }
      else {
        throw e
      }
    })
  }
  const text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  const mockData=[
    {img:img1,redux:redux1,text},
    {img:img2,redux:redux2,text},
    {img:img3,redux:redux3,text},
    {img:img4,redux:redux4,text},
    {img:img5,redux:redux5,text},
    {img:img1,redux:redux6,text},
    {img:img2,redux:redux7,text},
    {img:img3,redux:redux8,text},
    {img:img4,redux:redux9,text},
    {img:img5,redux:redux10,text},
    {img:img1,redux:redux1,text},
    {img:img2,redux:redux2,text},
    {img:img3,redux:redux3,text},
    {img:img4,redux:redux4,text},
    {img:img5,redux:redux5,text},
    {img:img1,redux:redux6,text},
    {img:img2,redux:redux7,text},
    {img:img3,redux:redux8,text},
    {img:img4,redux:redux9,text},
    {img:img5,redux:redux10,text},
    {img:img1,redux:redux1,text},
    {img:img2,redux:redux2,text},
    {img:img3,redux:redux3,text},
    {img:img4,redux:redux4,text},
    {img:img5,redux:redux5,text},
  ]
  const mockData2=[
    {img:img1,redux:redux1,text:'bye 1'},
    {img:img2,redux:redux2,text:'bye 2'},
    {img:img3,redux:redux3,text:'bye 3'},
    {img:img4,redux:redux4,text:'bye 4'},
    {img:img5,redux:redux5,text:'bye 5'}
  ]
  const Contents=styled.div`
  display:contents;
  `
  return (
    <S.Container>
      <S.Col>
        <S.RowBetween>
          <div>
            <Menu redux={redux1}>
            {
              ()=>
              {
                return (
                  <S.Col>
                    <S.RowCenter><S.SLink to='/'>route 1</S.SLink></S.RowCenter>
                    <S.RowCenter><S.SLink to='/route2'>route 2</S.SLink></S.RowCenter>
                  </S.Col>
                )
              }
            }
            </Menu>
          </div>
          <S.ColAlignCenter>
            <WellComeCard/>
            <Switch>
              <Route path='/' exact render={
                ()=>{
                  return(
                    <Contents>
                        <PaginateControl redux={redux1} itemsNumber={mockData.length} pageItemsNumber={10}/>
                      {
                        mockData.map((item,i)=>
                        i<10*redux1.state.paginateControl.pageIndex&&
                        10*redux1.state.paginateControl.pageIndex-10<i+1&&
                        <DraggableContentCard key={i} id={i+'-dcc'} img={item.img}  text={item.text} redux={item.redux}/>)
                      }
                    </Contents>
                  )
                }
              }/>
              <Route path='/route2' render={
                ()=>{
                  return(
                    mockData2.map((item,i)=>
                    <DraggableContentCard key={i} id={i+'-dcc'} img={item.img} text={item.text} redux={item.redux}/>)
                  )
                }
              }/>
            </Switch>
          </S.ColAlignCenter>
          {
            redux1.state.app.user?
            <div><LoggedInCard redux={redux1}/></div>:
            <div><S.A onClick={signInUser}>sign in w/ google</S.A></div>
          }
        </S.RowBetween>
      </S.Col>
    </S.Container>
  )
}
