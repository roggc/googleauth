import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container=styled.div`
font-family:arial,sans-serif;
margin: 21px 14px;
`
export const Row=styled.div`
display:flex;
`
export const RowCenter=styled.div`
display:flex;
justify-content:center;
`
export const RowEnd=styled.div`
display:flex;
justify-content:flex-end;
`
export const RowBetween=styled.div`
display:flex;
justify-content:space-between;
`
export const PhotoURL=styled.div`
border-radius: 52px;
overflow: hidden;
width: 100px;
display: inline-flex;
box-shadow: 0 0 43px -11px;
`
export const Img=styled.img`
max-width:100%;
max-height:100%;
`
export const Col=styled.div`
display:flex;
flex-direction:column;
`
export const ColCenter=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
min-height:100%;
`
export const ColAlignCenter=styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
export const LoggedInCardBorder=styled.div`
border-radius: 20px;
padding: 26px 9px;
box-shadow: 0 0 6px 1px;
background-color:ghostwhite;
`
export const Button=styled.button`
border-radius:5px;
`
export const A=styled.a`
color:blue;
text-decoration:none;
:hover{
  text-decoration:underline;
  cursor:pointer;
}
`
export const WellComeCardBorder=styled.div`
box-shadow: 0 0 5px 0px;
border-radius: 8px;
width: 647px;
padding: 55px;
margin: 0 0 44px;
background-color:ghostwhite;
`
export const Big=styled.div`
font-size:3.3em;
color:grey;
`
export const MenuBorder=styled.div`
box-shadow: 0 0 5px 0;
padding: 5px;
border-radius: 5px;
cursor:pointer;
position:relative;
background-color:ghostwhite;
`
export const ContentCardBorder=styled.div`
box-shadow: 0 0 4px 2px;
border-radius: 5px;
padding: 10px;
width: 700px;
height: 192px;
color: grey;
font-size: 1.5em;
background-color:ghostwhite;
overflow:auto;
`
export const ModalBorder=styled.div`
position: absolute;
box-shadow: 0 0 2px;
border-radius: 5px;
background-color: white;
top: 31px;
left: 30px;
white-space: nowrap;
padding: 5px 7px;
cursor:initial;
background-color:ghostwhite;
`
export const SLink=styled(Link)`
text-decoration:none;
color:grey;
:hover{
  text-decoration:underline;
}
`
