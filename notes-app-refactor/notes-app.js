const notes = getSavedNotes()

const filters = { searchText: "" }

renderNotes(notes, filters)

document.querySelector("#search-input").addEventListener("input", (e) => {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector("#new-note-form").addEventListener("submit", (e) => {
  e.preventDefault()
  notes.push({
    id: uuidv4(),
    title: e.target.elements.newNote.value,
    body: e.target.elements.newNote.value,
  })
  saveNotes(notes)
  e.target.elements.newNote.value = ""
  renderNotes(notes, filters)
})

document
  .querySelector("#filter-by")
  .addEventListener("change", (e) => console.log(e.target.value))
