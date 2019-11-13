import React from 'react'
import * as S from '../../styled/styled'

export const LoggedInCard=
({redux})=>
{
  const logout=e=>
  {
    localStorage.removeItem('user')
    redux.dispatch({type:'APP_LOGOUT'})
  }
  return (
    <S.LoggedInCardBorder>
      <S.Col>
        <S.RowCenter><S.PhotoURL><S.Img src={redux.state.app.user.photoURL}/></S.PhotoURL></S.RowCenter>
        <S.RowCenter>wellcome</S.RowCenter>
        <S.RowCenter>{redux.state.app.user.email}</S.RowCenter>
        <S.RowCenter><S.A onClick={logout}>logout</S.A></S.RowCenter>
      </S.Col>
    </S.LoggedInCardBorder>
  )
}
