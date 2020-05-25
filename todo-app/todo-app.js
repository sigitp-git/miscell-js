let todo = []

const todoJSON = localStorage.getItem("todo")
if (todoJSON !== null) {
  todo = JSON.parse(todoJSON)
}

// hideCompleted added later
const search = { textSearch: "", hideCompleted: false }

const renderTodo = function (arr, key) {
  const todonext = todo.filter((item) => !item.completed)
  const h2todo = document.createElement("h2")
  h2todo.textContent = `You have ${todonext.length} todos left and ${
    todo.length - todonext.length
  } todos done.`
  document.querySelector("#todo-summary").innerHTML = ""
  document.querySelector("#todo-summary").append(h2todo)

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
    const P = document.createElement("p")
    if (item.title.length > 0) {
      P.textContent =
        item.title +
        ": " +
        item.detail +
        ". Completed status: " +
        item.completed
    } else {
      P.textContent = "Oops, a blank todo here"
    }
    document.querySelector("#todo-list").appendChild(P)
  })
}

renderTodo(todo, search)

document.querySelector("#todo-search").addEventListener("input", (e) => {
  search.textSearch = e.target.value
  renderTodo(todo, search)
})

document.querySelector("#new-todo-form").addEventListener("submit", (e) => {
  e.preventDefault()
  todo.push({
    title: e.target.elements.newTodo.value,
    detail: e.target.elements.newTodo.value + " detail.",
    completed: false,
  })
  localStorage.setItem("todo", JSON.stringify(todo))
  e.target.elements.newTodo.value = ""
  renderTodo(todo, search)
})

document
  .querySelector("#clear-todos")
  .addEventListener("click", (e) =>
    document.querySelectorAll("#todo-list").forEach((item) => item.remove())
  )

document.querySelector("#hide-completed").addEventListener("change", (e) => {
  search.hideCompleted = e.target.checked
  renderTodo(todo, search)
})
