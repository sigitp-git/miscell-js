// document
//   .querySelectorAll("p")
//   .forEach(
//     (p) =>
//       p.textContent.toLocaleLowerCase().includes("the") &&
//       (p.textContent = "@@")
//   )

//TARGETTING HTML ELEMENT
// ---single----
// p target single p tag
// #replace target single id="replace"
// .item target single class="item"
// ---combo---- (place doesn't matter)
// p#order target combo of p tag and id="order"
// button.inventory target combo of button element and class="inventory"
// h1#title.application target combo of h1 element and id="title" and class="application"
// h1.application#title target combo of h1 element and class="application" and id="title"

document
  .querySelector("#todo-input")
  .addEventListener("input", (e) => console.log(e.target.value))
document
  .querySelector("#create-todo")
  .addEventListener("click", (e) => console.log("create todo"))
document
  .querySelector("#clear-todos")
  .addEventListener("click", (e) => console.log("clear todos"))

const todo = [
  { title: "Order cat food", completed: true },
  { title: "Clean Kitchen", completed: false },
  { title: "Buy Food", completed: false },
  { title: "Do Work", completed: false },
  { title: "Excercise", completed: true },
]

const todonext = todo.filter((item) => !item.completed)
const h2todo = document.createElement("h2")
h2todo.textContent = `You have ${todonext.length} todos left:`
document.querySelector("body").append(h2todo)

todo.map((item) => {
  if (!item.completed) {
    const P = document.createElement("p")
    P.textContent = item.title
    document.querySelector("body").appendChild(P)
  }
})

const tododone = todo.filter((item) => item.completed)
const h2done = document.createElement("h2")
h2done.textContent = `You have ${tododone.length} todos done:`
document.querySelector("body").append(h2done)

todo.map((item) => {
  if (item.completed) {
    const P = document.createElement("p")
    P.textContent = item.title
    document.querySelector("body").appendChild(P)
  }
})
