const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const todo = [
    { title: 'Order cat food', status: 'done' },
    { title: 'Clean Kitchen', status: 'not' },
    { title: 'Buy Food', status: 'not' },
    { title: 'Do Work', status: 'not' },
    { title: 'Excercise', status: 'done' }
]

const todo1 = [
    { title: 'Order cat food', completed: true },
    { title: 'Clean Kitchen', completed: false },
    { title: 'Buy Food', completed: false },
    { title: 'Do Work', completed: false },
    { title: 'Excercise', completed: true }
]

const sortNotes = function (arr) {
    arr.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

// console.log(notes)
// sortNotes(notes)
// console.log(notes)

const sortTodo = function (arr) {
    arr.sort((a, b) => {
        if (a.status.toLowerCase() === 'not') {
            return -1
        } else {
            return 1
        }
    })
}

// console.log(todo)
// sortTodo(todo)
// console.log(todo)

const sortTodo1 = function (arr) {
    arr.sort((a, b) => {
        if (!a.completed && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

console.log(todo1)
sortTodo1(todo1)
console.log(todo1)