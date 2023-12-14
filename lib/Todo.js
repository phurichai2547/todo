class Todo {
    static runningId = 1

    constructor(id = Todo.runningId++, description, done = false) {
        this.id = id
        this.description = description
        this.done = done
    }
    getTodo() {
        return { id, description }
    }
    setDescription(newDescription) {
        this.description = newDescription
    }
    setDone() {
        this.done = !this.done
    }
}

export { Todo }