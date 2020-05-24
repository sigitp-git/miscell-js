// DOM -- Document Object Model
// a stateless document, sequential execution
// Document is the HTML document
// Object is JavaScript Object that model the Document (which is HTML)
// the browser is givinga document object {document}

// Single component remove
// document.querySelector('p').remove()

// All component remove
// document.querySelectorAll('p').forEach(p => p.remove())

// All component print
// document.querySelectorAll('p').forEach(p => console.log(p.textContent))

// All component print
// document.querySelectorAll('p').forEach(p => p.textContent = Date())

// // Adding new element to DOM
// const newP = document.createElement('p')
// newP.textContent = 'HAHA'
// document.querySelector('body').appendChild(newP)

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

const notes = [
  { title: "My Next Trip", body: "I would like to go to Spain" },
  { title: "Habbits to work on", body: "More Excercise" },
  { title: "Office Modification", body: "Ergonomic Keyboard" },
  { title: "Ergo Monitors", body: "Monitor Arms" },
  { title: "Office Decoration", body: "Add Plants" },
]

const filters = { searchText: "" }

const renderNotes = function (arr, filters) {
  const filteredNotes = arr.filter(
    (item) =>
      item.title.toLowerCase().includes(filters.searchText) ||
      item.body.toLowerCase().includes(filters.searchText)
  )
  document.querySelector("#notes-title").innerHTML = ""
  filteredNotes.map((item) => {
    const P = document.createElement("p")
    P.textContent = item.title
    document.querySelector("#notes-title").appendChild(P)
  })
}

renderNotes(notes, filters)

document
  .getElementById("create-note")
  .addEventListener("click", (e) => console.log("id create-note"))
document
  .getElementById("clear-notes")
  .addEventListener("click", (e) =>
    document.querySelectorAll(".note").forEach((item) => item.remove())
  )
document.querySelector("#search-input").addEventListener("input", (e) => {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})
