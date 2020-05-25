const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes")

  if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}

const generateNoteDOM = (arr) => {
  const P = document.createElement("p")

  if (arr.title.length > 0) {
    P.textContent = arr.title + ": " + arr.body + " details."
  } else {
    P.textContent = "Oops a blank notes here"
  }
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
    const P = generateNoteDOM(arr)
    document.querySelector("#notes-title").appendChild(P)
  })
}

const saveNotes = (arr) => {
  localStorage.setItem("notes", JSON.stringify(arr))
}
