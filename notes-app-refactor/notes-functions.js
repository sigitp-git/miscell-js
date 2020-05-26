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
  const D = document.createElement("div")

  const B = document.createElement("button")
  B.textContent = "x"

  D.appendChild(B)

  const S = document.createElement("span")
  if (item.title.length > 0) {
    S.textContent = " " + item.title + ": " + item.body + " details. "
  } else {
    S.textContent = " Oops a blank notes here "
  }

  D.appendChild(S)

  return D
}

const renderNotes = function (arr, key) {
  const filtered = arr.filter(
    (item) =>
      item.title.toLowerCase().includes(key.searchText.toLowerCase()) ||
      item.body.toLowerCase().includes(key.searchText.toLowerCase())
  )

  document.querySelector("#notes-title").innerHTML = ""
  filtered.map((item) => {
    const D = generateNoteDOM(item)
    document.querySelector("#notes-title").appendChild(D)
  })
}
