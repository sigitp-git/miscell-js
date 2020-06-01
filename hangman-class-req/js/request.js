// Async Await, cleaner
const getPuzzle = async (wordCount) => {
  // Fetch returns promise, wait for resolve or reject
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`,
    {}
  )

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to Fetch')
  }
}

// // Promise Chaining
// const getPuzzle = (wordCount) => {
//   // Fetch returns promise, wait for resolve or reject
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json() // return a promise in json
//       } else {
//         throw new Error('Unable to Fetch')
//       }
//     }).then((data) => { // catch promise i json from return response.json()
//       return data.puzzle
//     })
// }
