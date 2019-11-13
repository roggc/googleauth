import React from 'react'
import * as S from '../../styled/styled'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

export const ContentCard=
({render,redux,img,text,...rest})=>
{
  const showLargeImg=e=>redux.dispatch({type:'CONTENTCARD_SETSHOWLARGEIMG',val:true})
  const hideLargeImg=e=>redux.dispatch({type:'CONTENTCARD_SETSHOWLARGEIMG',val:false})
  const ImgContainer=styled.div`
  float:left;
  width:63px;
  cursor:pointer;
  `
  const Img=styled.img`
  width:100%;
  `
  const LargeImg=styled.div`
  position:absolute;
  z-index:1;
  background-color: ghostwhite;
  padding: 22px;
  box-shadow: 0 0 11px;
  border-radius: 5px;
  top: -153px;
  left: 135px;
  width:228px;
  `
  const Div=styled.div`
  position:relative;
  `
  const SFontAwesomeIcon=styled(FontAwesomeIcon)`
  position:absolute;
  cursor:pointer;
  top:0px;
  right:0px;
  margin:10px;
  `
  return (
    <Div {...rest}>
      {
        redux.state.contentCard.showLargeImg&&
        <LargeImg>
          <SFontAwesomeIcon icon={faTimes} color='grey' onClick={hideLargeImg}/>
          <Img src={img}/>
        </LargeImg>
      }
      <S.ContentCardBorder>
        <ImgContainer onClick={showLargeImg}><Img src={img}/></ImgContainer>
        {text}
      </S.ContentCardBorder>
    </Div>
  )
}
