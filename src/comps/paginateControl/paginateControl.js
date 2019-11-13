import React from 'react'
import styled from 'styled-components'
import {PageIndex} from '../pageIndex/pageIndex'

export const PaginateControl=
({itemsNumber,pageItemsNumber,redux})=>
{
  const items=[]
  for(let i=0;i<itemsNumber/pageItemsNumber;i++)
  {
    items.push(<PageIndex redux={redux} key={i} number={i+1}/>)
  }
  const Wrapper=styled.div`
  overflow:hidden;
  `
  return (
    <Wrapper>
      {items}
    </Wrapper>
  )
}
