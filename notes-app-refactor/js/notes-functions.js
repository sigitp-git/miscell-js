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
    A.innerHTML = item.title
  } else {
    A.innerHTML = "No Title"
  }

  A.setAttribute("href", `edit.html#${item.id}`)
  D.appendChild(A)

  const meta = document.createElement("span")
  meta.innerHTML =
    "<br/>  <small> Body: " +
    item.body +
    "<br/>Created On: " +
    moment.unix(item.createdAt).format("MMM D, YYYY") +
    ". Updated At: " +
    moment.unix(item.updatedAt).fromNow() +
    " </small> <hr>"
  D.appendChild(meta)

  return D
}

const sortNotes = (arr, key) => {
  if (key === "byEdited") {
    return arr.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (key === "byCreated") {
    return arr.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (key === "byTitle") {
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
  notes = sortNotes(notes, filters.sortBy)
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
