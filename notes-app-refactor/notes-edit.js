const noteId = location.hash.substring(1)

const notes = getSavedNotes()
const note = notes.find((item) => item.id === noteId)

const titleElement = document.querySelector("#note-title")
const bodyElement = document.querySelector("#note-body")
const removeButton = document.querySelector("#remove-note")

if (note === undefined) {
  location.assign("/notes-app-refactor/index.html")
}

titleElement.value = note.title
titleElement.addEventListener("input", (e) => {
  note.title = e.target.value
  saveNotes(notes)
})

bodyElement.value = note.body
bodyElement.addEventListener("input", (e) => {
  note.body = e.target.value
  saveNotes(notes)
})

removeButton.addEventListener("click", (e) => {
  removeNote(notes, noteId)
  saveNotes(notes)
  location.assign("/notes-app-refactor/index.html")
})
