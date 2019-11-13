import React from 'react'
import styled from 'styled-components'

export default
C=>({empty,...props})=>
{
  const onDragOver=e=>
  {
    e.preventDefault()
    const element=e.currentTarget
    element.style.backgroundColor='purple'
  }
  const onDragLeave=e=>
  {
    const element=e.currentTarget
    element.style.backgroundColor='white'
  }
  const onDrop=e=>
  {
    const insertAfter=(newNode,referenceNode)=> {
      referenceNode.parentNode.insertBefore(newNode,referenceNode.nextSibling)
    }
    const dropZone=e.currentTarget
    dropZone.style.backgroundColor='white'
    const id=e.dataTransfer.getData('text')
    const draggableElement=document.getElementById(id)
    insertAfter(draggableElement.parentNode,dropZone.parentNode)
    e.dataTransfer.clearData()
  }
  const onDropLeft=e=>
  {
    const insertBefore=(newNode,referenceNode)=> {
      referenceNode.parentNode.insertBefore(newNode,referenceNode)
    }
    const dropZone=e.currentTarget
    dropZone.style.backgroundColor='white'
    const id=e.dataTransfer.getData('text')
    const draggableElement=document.getElementById(id)
    insertBefore(draggableElement.parentNode,dropZone.parentNode)
    e.dataTransfer.clearData()
  }
  const onDragStart=
  e=>
  {
    const element=e.currentTarget
    e.dataTransfer.setData('text',e.target.id)
  }
  const DroppableCardZone=styled.div`
  height:10px;
  margin: 4px 0px;
  border-radius:5px;
  `
  const Container=styled.div`
  float:left;
  display:flex;
  flex-direction:column;
  `
  const el=
  <Container>
    <DroppableCardZone onDragOver={onDragOver} onDrop={onDropLeft} onDragLeave={onDragLeave}/>
    <C {...props} draggable='true' onDragStart={onDragStart}/>
    <DroppableCardZone onDragOver={onDragOver} onDrop={onDrop} onDragLeave={onDragLeave}/>
  </Container>
  return el
}
