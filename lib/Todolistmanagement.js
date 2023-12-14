import { Todo } from './Todo.js'


function Todolistmanagement() {
    let todos = []
    function addTodo(desc) {
        let newTodo = new Todo(undefined, desc)
        todos.push(newTodo)
        return newTodo
    }
    function findTodo(searchId) {
        return todos.find((todo) => todo.id = searchId)
    }
    function findIndexTodo(searchId) {
        return todos.findIndex((todo) => todo.id = searchId)
    }
    function removeTodo(removeId) {
        todos = todos.filter((todo) => todo.id != removeId)
    }
    function getTodos() {
        return todos
    }
    function getNumberOfDone() {
        let numdone = todos.filter((todo) => todo.done == true)
        return numdone.length
    }
    function getNumberOfNotDone() {
        let numnotdone = todos.filter((todo) => todo.done == false)
        return numnotdone.length
    }
    function clearTodo() {
        todos = []
    }
    function setItemToDone(doneId) {
        todos.forEach((todo) => {
            if (todo.id == doneId) {
                todo.setDone()
            }
        })
    }
    function loadTodos(userTodos) {
        userTodos.forEach(todo => {
            let newtodo = new Todo(todo.id, todo.description, todo.done)
            todos.push(newtodo)
        })
    }
    return { addTodo, findTodo, findIndexTodo, removeTodo, getTodos, getNumberOfDone, getNumberOfNotDone, clearTodo, setItemToDone, loadTodos }
}

export { Todolistmanagement }