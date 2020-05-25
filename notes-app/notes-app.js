let notes = []

const notesJSON = localStorage.getItem("notes")
if (notesJSON !== null) {
  notes = JSON.parse(notesJSON)
}

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
    if (item.title.length > 0) {
      P.textContent = item.title + ": " + item.body + " details."
    } else {
      P.textContent = "Oops a blank notes here"
    }
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
  localStorage.setItem("notes", JSON.stringify(notes))
  e.target.elements.newNote.value = ""
  renderNotes(notes, filters)
})

document
  .querySelector("#filter-by")
  .addEventListener("change", (e) => console.log(e.target.value))
