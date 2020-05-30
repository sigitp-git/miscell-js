const noteId = location.hash.substring(1)

let updatedAt = moment().format('X')

const titleElement = document.querySelector("#note-title")
const bodyElement = document.querySelector("#note-body")
const removeButton = document.querySelector("#remove-note")

let notes = getSavedNotes()

let note = notes.find((item) => item.id === noteId)

if (note === undefined) {
  location.assign("/notes-app-refactor/index.html")
}
titleElement.value = note.title
bodyElement.value = note.body

titleElement.addEventListener("input", (e) => {
  note.title = e.target.value
  note.updatedAt = updatedAt
  saveNotes(notes)
})

bodyElement.addEventListener("input", (e) => {
  note.body = e.target.value
  note.updatedAt = updatedAt
  saveNotes(notes)
})

removeButton.addEventListener("click", (e) => {
  removeNote(notes, noteId)
  saveNotes(notes)
  location.assign("/notes-app-refactor/index.html")
})

// browser window storage events only happens on other tabs for syncing between tabs
window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue)
  }

  let note = notes.find((item) => item.id === noteId)

  if (note === undefined) {
    location.assign("/notes-app-refactor/index.html")
  }
  titleElement.value = note.title
  bodyElement.value = note.body
})
