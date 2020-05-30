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

const removeNote = (arr, id) => {
  const indexNote = arr.findIndex((item) => item.id === id)
  if (indexNote > -1) {
    arr.splice(indexNote, 1)
  }
}

const generateNoteDOM = (arr, item) => {
  const D = document.createElement("div")

  const B = document.createElement("button")
  B.textContent = "x"
  B.addEventListener("click", (e) => {
    removeNote(arr, item.id)
    saveNotes(arr)
    renderNotes(arr, filters)
  })

  D.appendChild(B)

  const A = document.createElement("a")
  if (item.title.length > 0) {
    A.textContent = " " + item.title + ": " + item.body + " details. Created At: " + item.createdAt + ". Updated At: " + item.updatedAt
  } else {
    A.textContent = " No Title " + ": " + item.body + " details. Created At: " + item.createdAt + ". Updated At: " + item.updatedAt
  }

  A.setAttribute("href", `edit.html#${item.id}`)
  D.appendChild(A)

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
    const D = generateNoteDOM(arr, item)
    document.querySelector("#notes-title").appendChild(D)
  })
}
