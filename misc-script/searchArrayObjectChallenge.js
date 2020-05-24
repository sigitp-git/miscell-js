// Original array of strings
const todos = [
  "Order cat food",
  "Clean Kitchen",
  "Buy Food",
  "Do Work",
  "Excercise",
]
//console.log(todos)

// Modify original array of strings into array of object, implicit return, no code block {} required
const todos0 = todos.map(
  (item) => (item = { title: item, status: "done", location: "home" })
)
//console.log(todos0)

// Modify original array of strings into array of object with random value, explicit return since code block {} needed to randomize on each items
const todos1 = todos.map((item) => {
  const randomstatus = Boolean(Math.round(Math.random()))
  return (item = { title: item, status: randomstatus })
})
//console.log(todos1)

// Similar as above, modify todos into todos2 by changing it to array of objects by using push and putting title and status attributes on each item
const todos2 = []
for (i = 0; i < todos.length; i++) {
  const randomstatus = Boolean(Math.round(Math.random()))
  todos2.push({ title: todos[i], status: randomstatus })
}
//console.log(todos2)

//deleteTodo(todos, 'buy food')
const deleteTodo = function (todos, key) {
  let toDeleteIndex = todos.findIndex(
    (item) => item.title.toLowerCase() === key.toLowerCase()
  )
  let toDelete = todos.find(
    (item) => item.title.toLowerCase() === key.toLowerCase()
  )
  if (toDeleteIndex > -1) {
    todos.splice(toDeleteIndex, 1)
    console.log(`${toDelete.title} deleted`)
  }
}

deleteTodo(todos1, "clean")
//console.log(todos1)

//search and filter, filter() method returns a new array, doesn't mutate the original array
const notes = [
  { title: "My Next Trip", body: "I would like to go to Spain" },
  { title: "Habbits to work on", body: "More Excercise" },
  { title: "Office Modification", body: "Ergonomic Keyboard" },
]

// const findNotes = function (array, key) {
//     const filteredNotes = array.filter((item, i) => {
//         const isTitleMatch = item.title.toLowerCase().includes(key.toLowerCase())
//         const isBodyMatch = item.body.toLowerCase().includes(key.toLowerCase())
//         return isTitleMatch || isBodyMatch
//     })
//     return console.log(filteredNotes)
// }

const findNotes = (array, key) => {
  const filteredNotes = array.filter(
    (item) =>
      item.title.toLowerCase().includes(key) ||
      item.body.toLowerCase().includes(key)
  )
  return console.log(filteredNotes)
}

findNotes(notes, "ergonomic")

const todonext = [
  { title: "Order cat food", status: "done" },
  { title: "Clean Kitchen", status: "not" },
  { title: "Buy Food", status: "not" },
  { title: "Do Work", status: "not" },
  { title: "Excercise", status: "done" },
]

const findTodoNext = function (array, key) {
  const filteredTodoNext = array.filter((item) =>
    item.status.toLowerCase().includes(key)
  )
  return console.log(filteredTodoNext)
}

//findTodoNext(todonext, 'not')
