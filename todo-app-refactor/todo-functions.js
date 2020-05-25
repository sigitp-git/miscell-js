const getSavedTodos = () => {
  const todoJSON = localStorage.getItem("todo")

  if (todoJSON !== null) {
    return JSON.parse(todoJSON)
  } else {
    return []
  }
}

const saveTodo = (arr) => {
  localStorage.setItem("todo", JSON.stringify(arr))
}

const generateTodoDOM = (item) => {
  const P = document.createElement("p")
  if (item.title.length > 0) {
    P.textContent =
      item.title + ": " + item.detail + ". Completed status: " + item.completed
  } else {
    P.textContent = "Oops, a blank todo here"
  }
  return P
}

const renderTodo = function (arr, key) {
  document.querySelector("#todo-summary").innerHTML = ""
  document.querySelector("#todo-summary").append(generateSummaryDOM(arr))

  document.querySelector("#todo-list").innerHTML = ""
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
    document.querySelector("#todo-list").appendChild(generateTodoDOM(item))
  })
}

const generateSummaryDOM = (arr) => {
  const todonext = arr.filter((item) => !item.completed)
  const h2todo = document.createElement("h2")
  h2todo.textContent = `You have ${todonext.length} todos left and ${
    arr.length - todonext.length
  } todos done.`
  return h2todo
}
