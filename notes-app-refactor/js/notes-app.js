'use strict'

let notes = getSavedNotes()
const createdAt = moment().format('X')
let updatedAt = moment().format('X')

const filters = {
  searchText: '',
  sortBy: 'byEdited',
}

renderNotes(notes, filters)

document.querySelector('#search-input').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

// document.querySelector("#new-note-form").addEventListener("submit", (e) => {
//   const uuid = uuidv4()
//   e.preventDefault()
//   notes.push({
//     id: uuid,
//     title: e.target.elements.newNote.value,
//     body: e.target.elements.newNote.value,
//   })
//   saveNotes(notes)
//   e.target.elements.newNote.value = ""
//   //renderNotes(notes, filters)
//   location.assign(`./edit.html#${uuid}`)
// })

document.querySelector('#new-note-button').addEventListener('click', (e) => {
  const uuid = uuidv4()
  notes.push({
    id: uuid,
    createdAt: createdAt,
    updatedAt: updatedAt,
    title: '',
    body: '',
  })
  saveNotes(notes)
  location.assign(`./edit.html#${uuid}`)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
  filters.sortBy = e.target.value
  //console.log(e.target.value)
  renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
  }
  renderNotes(notes, filters)
})

// // momentjs library
// const birthday = moment('1984-07-01')
// console.log(birthday.format('MMM D, YYYY'))
