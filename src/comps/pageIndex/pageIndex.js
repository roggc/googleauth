import React from 'react'
import styled from 'styled-components'

export const PageIndex=
({number,redux})=>
{
  const Wrapper=styled.div`
  float:left;
  box-shadow: 0 0 3px;
  border-radius: 5px;
  padding: 3px;
  margin: 3px;
  cursor: pointer;
  text-decoration:${redux.state.paginateControl.pageIndex===number?'underline':'none'};
  `
  const setPageIndex=e=>redux.dispatch({type:'PAGINATECONTROL_SETPAGENUMBER',val:number})
  return (
    <Wrapper onClick={setPageIndex}>
      {number}
    </Wrapper>
  )
}
