function showTodoItem(newId, newDescription) {
    let Listtodo = document.querySelector('#listTodo')
    let div = document.createElement('div')
    div.id = newId
    div.setAttribute('class', 'todoItem')

    let p = document.createElement('p')
    p.textContent = newDescription

    let buttondone = document.createElement('button')
    buttondone.textContent = 'Not Done'

    let buttonremove = document.createElement('button')
    buttonremove.textContent = 'Remove'

    div.appendChild(p)
    div.appendChild(buttondone)
    div.appendChild(buttonremove)

    Listtodo.appendChild(div)

}
function showNumberOfDone(numberOfDone) {
    let numdone = document.querySelector('#done')
    numdone.textContent = `Number of Done: ${numberOfDone}`
}
function showNumberOfNotDone(numberOfNotDone) {
    let numnotdone = document.querySelector('#notDone')
    numnotdone.textContent = `Number of Not Done: ${numberOfNotDone}`
}
function removeTodoItem(removeId) {
    let removediv = document.querySelector(`#${removeId}`)
    removediv.removeChild()
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }