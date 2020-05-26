const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes")

  if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}

const saveNotes = (arr) => {
  localStorage.setItem("notes", JSON.stringify(arr))
}

const generateNoteDOM = (item) => {
  const P = document.createElement("p")

  const button = document.createElement('button')
  button.textContent = 'x'

  if (item.title.length > 0) {
    P.textContent = item.title + ": " + item.body + " details."
  } else {
    P.textContent = "Oops a blank notes here"
  }

  P.appendChild(button)

  return P
}

const renderNotes = function (arr, key) {
  const filtered = arr.filter(
    (item) =>
      item.title.toLowerCase().includes(key.searchText.toLowerCase()) ||
      item.body.toLowerCase().includes(key.searchText.toLowerCase())
  )

  document.querySelector("#notes-title").innerHTML = ""
  filtered.map((item) => {
    const P = generateNoteDOM(item)
    document.querySelector("#notes-title").appendChild(P)
  })
}
