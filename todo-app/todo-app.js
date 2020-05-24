const todo = [
  {
    title: "Order cat food",
    detail: "Order Purina Wet and Dry Food",
    completed: true,
  },
  {
    title: "Clean Kitchen",
    detail: "Clean with cleaning cloth and soap",
    completed: false,
  },
  {
    title: "Buy Food",
    detail: "Buy healthy portion of protein",
    completed: false,
  },
  { title: "Do Work", detail: "Enablement for Tech Content", completed: false },
  { title: "Excercise", detail: "Dumbell 40 pounds workout", completed: true },
]

const todonext = todo.filter((item) => !item.completed)
const h2todo = document.createElement("h2")
h2todo.textContent = `You have ${todonext.length} todos left and ${
  todo.length - todonext.length
} todos done.`
document.querySelector("#todo-summary").append(h2todo)

const search = { textSearch: "" }
const renderTodo = function (arr, key) {
  document.querySelector("#todo-list").innerHTML = ""
  const filteredTodo = arr.filter(
    (item) =>
      item.title.toLowerCase().includes(key.textSearch.toLowerCase()) ||
      item.detail.toLowerCase().includes(key.textSearch.toLowerCase())
  )
  filteredTodo.map((item) => {
    const P = document.createElement("p")
    P.textContent =
      item.title + ": " + item.detail + ". Completed status: " + item.completed
    document.querySelector("#todo-list").appendChild(P)
  })
}
renderTodo(todo, search)

document.querySelector("#todo-search").addEventListener("input", (e) => {
  search.textSearch = e.target.value
  renderTodo(todo, search)
})

document
  .querySelector("#clear-todos")
  .addEventListener("click", (e) =>
    document.querySelectorAll("#todo-list").forEach((item) => item.remove())
  )
