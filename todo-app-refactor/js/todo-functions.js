'use strict'

const getSavedTodos = () => {
  const todoJSON = localStorage.getItem('todo')

  try {
    return todoJSON ? JSON.parse(todoJSON) : []
  } catch (e) {
    return []
  }
}

const saveTodo = (arr) => {
  localStorage.setItem('todo', JSON.stringify(arr))
}

const removeTodo = (arr, id) => {
  const indexTodo = arr.findIndex((item) => item.id === id)
  if (indexTodo > -1) {
    arr.splice(indexTodo, 1)
  }
}

const toggleTodo = (arr, id) => {
  const T = arr.find((item) => item.id === id)
  if (T) {
    T.completed = !T.completed
  }
}

const generateTodoDOM = (arr, item) => {
  const D = document.createElement('div')

  const C = document.createElement('input')
  C.setAttribute('type', 'checkbox')
  C.checked = item.completed
  C.addEventListener('change', (e) => {
    toggleTodo(arr, item.id)
    saveTodo(arr)
    renderTodo(arr, search)
  })
  D.appendChild(C)

  const S = document.createElement('span')
  if (item.title.length > 0) {
    S.textContent =
      ' ' +
      item.title +
      ': ' +
      item.detail +
      '. Completed status: ' +
      item.completed +
      ' '
  } else {
    S.textContent = ' Oops, a blank todo here '
  }

  D.appendChild(S)

  const B = document.createElement('button')
  B.textContent = 'x'
  B.addEventListener('click', (e) => {
    removeTodo(arr, item.id)
    saveTodo(arr)
    renderTodo(arr, search)
  })
  D.appendChild(B)

  return D
}

const renderTodo = function (arr, key) {
  document.querySelector('#todo-summary').innerHTML = ''
  document.querySelector('#todo-summary').append(generateSummaryDOM(arr))

  document.querySelector('#todo-list').innerHTML = ''
  let filteredTodo = arr.filter(
    (item) =>
      item.title.toLowerCase().includes(key.textSearch.toLowerCase()) ||
      item.detail.toLowerCase().includes(key.textSearch.toLowerCase())
  )

  // new filter hideCompleted added
  filteredTodo = filteredTodo.filter((item) =>
    search.hideCompleted ? !item.completed : true
  )

  filteredTodo.map((item) => {
    document.querySelector('#todo-list').appendChild(generateTodoDOM(arr, item))
  })
}

const generateSummaryDOM = (arr) => {
  const todonext = arr.filter((item) => !item.completed)
  const h2todo = document.createElement('h2')
  h2todo.textContent = `You have ${todonext.length} todos left and ${
    arr.length - todonext.length
  } todos done.`
  return h2todo
}
