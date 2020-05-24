const notes = [
  { title: "My Next Trip", body: "I would like to go to Spain" },
  { title: "Habbits to work on", body: "More Excercise" },
  { title: "Office Modification", body: "Ergonomic Keyboard" },
  { title: "Ergo Monitors", body: "Monitor Arms" },
  { title: "Office Decoration", body: "Add Plants" },
]

const filters = { searchText: "" }
const renderNotes = function (arr, key) {
  const filtered = arr.filter(
    (item) =>
      item.title.toLowerCase().includes(key.searchText.toLowerCase()) ||
      item.body.toLowerCase().includes(key.searchText.toLowerCase())
  )
  document.querySelector("#notes-title").innerHTML = ""
  filtered.map((item) => {
    const P = document.createElement("p")
    P.textContent = item.title + ": " + item.body + " details."
    document.querySelector("#notes-title").appendChild(P)
  })
}
renderNotes(notes, filters)

document.querySelector("#search-input").addEventListener("input", (e) => {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector("#new-note-form").addEventListener("submit", (e) => {
  e.preventDefault()
  notes.push({
    title: e.target.elements.newNote.value,
    body: e.target.elements.newNote.value,
  })
  e.target.elements.newNote.value = ""
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', e => console.log(e.target.value))