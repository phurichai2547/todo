import { Todolistmanagement } from "../lib/Todolistmanagement.js";
import { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } from "../ui/TodolistUi.js";
let { addTodo, findTodo, findIndexTodo, removeTodo, getTodos, getNumberOfDone, getNumberOfNotDone, clearTodo, setItemToDone, loadTodos } = Todolistmanagement()

let addbtn = document.querySelector('#addBtn')
let addvalue = document.querySelector('#addTodo>input')
function addTodoHandler() {
    let newTodo
    if (addvalue.value != '') {
        newTodo = addTodo(addvalue.value)
        showTodoItem(newTodo.id, newTodo.description)
    }

    let allbtn = document.getElementById(`${newTodo.id}`).querySelectorAll('button')

    allbtn[0].addEventListener('click', notDoneButtonHandler)
    allbtn[1].addEventListener('click', removeButtonHandler)



    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())


}
function notDoneButtonHandler(e) {

    let target = e.target
    let parentNode = target.parentNode

    console.log(parentNode.id)
    if (target.textContent === 'Not Done') {
        target.style.backgroundColor = 'green'
        target.style.border = '3px solid black'
        target.style.color = 'white'
        target.textContent = 'Done'
    } else {
        target.style.backgroundColor = ''
        target.style.border = ''
        target.style.color = 'black'
        target.textContent = 'Not Done'

    }


    setItemToDone(parentNode.id)

    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())

}

function removeButtonHandler(e) {
    let target = e.target
    target.parentNode.remove()
    removeTodo(target.parentNode.id)
    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())
}
function loadHandler() {
    let something = localStorage.getItem('todos')
    let todos = JSON.parse(something)
    if (todos.length != 0 && todos != null && todos != undefined) {
        loadTodos(todos)
        let alltodos = getTodos()
        alltodos.forEach((todo) => {
            console.log(todo)
            showTodoItem(todo.id, todo.description)
            let allbtn = document.getElementById(`${todo.id}`).querySelectorAll('button')

            if (todo.done) {
                allbtn[0].style.backgroundColor = 'green'
                allbtn[0].style.border = '3px solid black'
                allbtn[0].style.color = 'white'
                allbtn[0].textContent = 'Done'
            }
            allbtn[0].addEventListener('click', notDoneButtonHandler)
            allbtn[1].addEventListener('click', removeButtonHandler)
        })
    }
    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())
}
function beforeUnloadHandler(event) {
    event.preventDefault()
    localStorage.setItem('todos', JSON.stringify(getTodos()))
    clearTodo()
}

addbtn.addEventListener('click', addTodoHandler)

export { addbtn, loadHandler, beforeUnloadHandler }