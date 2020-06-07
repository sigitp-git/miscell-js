// can be used on objects and array, most useful for objects

const todo = {
  id: 'adfadfadfsadf',
  text: 'Workout',
  completed: true,
}

// const text = todo.text
// const completed = todo.completed

// instead:
const { text, completed } = todo
const {
  text: todoText,
  completed: todoStatus = false,
  details = 'meh',
  ...others
} = todo

console.log(text, completed)
console.log(todoText, todoStatus, details)
console.log(others)

// array destructuring is like used on useState() from React hooks
const age = [43, 43, 12, 65, 90]
const [firstAge, , , lastAge] = age
const [age1, ...otherages] = age

// destructuring objects inside function arguments
const printTodo = ({ text, completed }) => {
    console.log(text, completed)
}

printTodo(todo)