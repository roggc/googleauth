import {mocha} from 'mocha'
import chai from 'chai'
import chaiDom from 'chai-dom'
import 'chai/register-should'  // allow us to use should in our tests

import app from './comps/app/app.spec'
import header from './comps/header/header.spec'
import footer from './comps/footer/footer.spec'
import menu from './comps/menu/menu.spec'
import home from './comps/home/home.spec'
import about from './comps/about/about.spec'
import popup from './comps/popup/popup.spec'
import todo from './comps/todo/todo.spec'
import todos from './comps/todos/todos.spec'
import addTodo from './comps/addTodo/addTodo.spec'
import clearAll from './comps/clearAll/clearAll.spec'
import checkAll from './comps/checkAll/checkAll.spec'
import addTodoConfirm from './comps/addTodoConfirm/addTodoConfirm.spec'
import modal from './comps/modal/modal.spec'
import clearAllConfirm from './comps/clearAllConfirm/clearAllConfirm.spec'
import checkAllConfirm from './comps/checkAllConfirm/checkAllConfirm.spec'

chai.use(chaiDom)  // allow us to use extended chai-dom api

mocha.setup('bdd')
mocha.checkLeaks()

app()
header()
footer()
menu()
home()
about()
popup()
todo()
todos()
addTodo()
clearAll()
checkAll()
addTodoConfirm()
modal()
clearAllConfirm()
checkAllConfirm()

mocha.run()
