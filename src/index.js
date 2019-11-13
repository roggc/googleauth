import React from 'react'
import {App} from './comps/app/app'
import {BrowserRouter as Router} from 'react-router-dom'
import {render} from 'react-dom'
import './public/favicon.ico'
import * as firebase from "firebase/app"

firebase.initializeApp({
  apiKey: "AIzaSyACsC0AjYIBl5xPd_nk2uQRm7npbaNbIGw",
  authDomain: "auth-19f5b.firebaseapp.com",
  databaseURL: "https://auth-19f5b.firebaseio.com",
  projectId: "auth-19f5b",
  storageBucket: "auth-19f5b.appspot.com",
  messagingSenderId: "1003273919912",
  appId: "1:1003273919912:web:6f235ece4c07008812119d"
})

render(
  <Router><App/></Router>,
  document.getElementById('app')
)
