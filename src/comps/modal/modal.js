import React from 'react'
import * as S from '../../styled/styled'

export const Modal=
({children})=>
{
  return (
    <S.ModalBorder>
      {children()}
    </S.ModalBorder>
  )
}
