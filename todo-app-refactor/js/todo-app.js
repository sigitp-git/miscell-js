'use strict'

let todo = getSavedTodos()

// hideCompleted added later
const search = { textSearch: '', hideCompleted: false }

renderTodo(todo, search)

document.querySelector('#todo-search').addEventListener('input', (e) => {
  search.textSearch = e.target.value
  renderTodo(todo, search)
})

document.querySelector('#new-todo-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const title = e.target.elements.newTodo.value.trim()

  if (title.length > 0) {
    todo.push({
      id: uuidv4(),
      title, //title: title, ES6
      detail: '',
      completed: false,
    })
    saveTodo(todo)
    e.target.elements.newTodo.value = ''
    renderTodo(todo, search)
  }
})

document
  .querySelector('#clear-todos')
  .addEventListener('click', (e) =>
    document.querySelectorAll('#todo-list').forEach((item) => item.remove())
  )

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  search.hideCompleted = e.target.checked
  renderTodo(todo, search)
})
