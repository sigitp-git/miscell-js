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
  const todoEl = document.createElement('label')
  const containerEl = document.createElement('div')

  const C = document.createElement('input')
  C.setAttribute('type', 'checkbox')
  C.checked = item.completed
  C.addEventListener('change', (e) => {
    toggleTodo(arr, item.id)
    saveTodo(arr)
    renderTodo(arr, search)
  })
  containerEl.appendChild(C)

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

  containerEl.appendChild(S)

  todoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  todoEl.appendChild(containerEl)

  const B = document.createElement('button')
  B.textContent = 'remove'
  B.classList.add('button', 'button--text')
  B.addEventListener('click', (e) => {
    removeTodo(arr, item.id)
    saveTodo(arr)
    renderTodo(arr, search)
  })
  todoEl.appendChild(B)

  return todoEl
}

const renderTodo = function (arr, key) {
  const todoList = document.querySelector('#todo-list')
  document.querySelector('#todo-summary').innerHTML = ''
  document.querySelector('#todo-summary').append(generateSummaryDOM(arr))

  todoList.innerHTML = ''
  let filteredTodo = arr.filter(
    (item) =>
      item.title.toLowerCase().includes(key.textSearch.toLowerCase()) ||
      item.detail.toLowerCase().includes(key.textSearch.toLowerCase())
  )

  // new filter hideCompleted added
  filteredTodo = filteredTodo.filter((item) =>
    search.hideCompleted ? !item.completed : true
  )

  if (filteredTodo.length > 0) {
    filteredTodo.map((item) => {
      todoList.appendChild(generateTodoDOM(arr, item))
    })
  } else {
    const emptyTodo = document.createElement('p')
    emptyTodo.classList.add('list-item')
    emptyTodo.textContent = 'No To-Do available'
    todoList.appendChild(emptyTodo)
  }
}

const generateSummaryDOM = (arr) => {
  const todonext = arr.filter((item) => !item.completed)
  const h2todo = document.createElement('h2')
  const pluralnext = todonext.length === 1 || todonext.length === 0 ? '' : 's'
  const pluraldone = ((arr.length - todonext.length) === 1) || ((arr.length - todonext.length) === 0) ? '' : 's'
  h2todo.textContent = `You have ${todonext.length} todo${pluralnext} left and ${
    arr.length - todonext.length
  } todo${pluraldone} done.`
  h2todo.classList.add('list-title')
  return h2todo
}
