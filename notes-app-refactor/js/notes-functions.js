'use strict'

const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')

  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (e) {
    return []
  }
}

const saveNotes = (arr) => {
  localStorage.setItem('notes', JSON.stringify(arr))
}

const removeNote = (arr, id) => {
  const indexNote = arr.findIndex((item) => item.id === id)
  if (indexNote > -1) {
    arr.splice(indexNote, 1)
  }
}

const generateNoteDOM = (arr, item) => {
  const noteEl = document.createElement('a')

  // const B = document.createElement('button')
  // B.textContent = 'x'
  // B.classList.add('button--remove')
  // B.addEventListener('click', (e) => {
  //   removeNote(arr, item.id)
  //   saveNotes(arr)
  //   renderNotes(arr, filters)
  // })

  // noteEl.appendChild(B)

  const textEl = document.createElement('p')
  if (item.title.length > 0) {
    textEl.innerHTML = item.title
  } else {
    textEl.innerHTML = 'No Title'
  }
  textEl.classList.add('list-item__title')

  noteEl.setAttribute('href', `edit.html#${item.id}`)
  noteEl.appendChild(textEl)

  const meta = document.createElement('p')
  meta.innerHTML =
    'Body: ' +
    item.body +
    'Created On: ' +
    moment.unix(item.createdAt).format('MMM D, YYYY') +
    '. Updated At: ' +
    moment.unix(item.updatedAt).fromNow() +
    ''
  meta.classList.add('list-item__subtitle')

  noteEl.appendChild(meta)
  noteEl.classList.add('list-item')

  return noteEl
}

const sortNotes = (arr, key) => {
  if (key === 'byEdited') {
    return arr.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (key === 'byCreated') {
    return arr.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (key === 'byTitle') {
    return arr.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
  }
}

const renderNotes = function (arr, key) {
  const notesEl = document.querySelector('#notes-title')
  notes = sortNotes(notes, filters.sortBy)
  const filtered = arr.filter(
    (item) =>
      item.title.toLowerCase().includes(key.searchText.toLowerCase()) ||
      item.body.toLowerCase().includes(key.searchText.toLowerCase())
  )

  notesEl.innerHTML = ''

  if (filtered.length > 0) {
    filtered.map((item) => {
      const D = generateNoteDOM(arr, item)
      notesEl.appendChild(D)
    })
  } else {
    const P = document.createElement('p')
    P.textContent = 'No notes'
    P.classList.add('empty-message')
    notesEl.appendChild(P)
  }
}
