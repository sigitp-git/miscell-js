const getPuzzle = (wordCount) => {
  // Fetch returns promise, wait for resolve or reject
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    .then((response) => {
      if (response.status === 200) {
        return response.json() // return a promise in json
      } else {
        throw new Error('Unable to Fetch')
      }
    }).then((data) => { // catch promise i json from return response.json()
      return data.puzzle
    })
}
