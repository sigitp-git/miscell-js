const getPuzzle = (callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.status === 200 && e.target.readyState === 4) {
      const randomwords = JSON.parse(e.target.responseText)
      callback(undefined, randomwords.puzzle)
    } else if (e.target.readyState === 4) {
      callback('Error Nih', undefined)
      console.log(`Error Euy, HTTP ${e.target.status}`)
    }
  })

  request.open('GET', 'http://puzzle.mead.io/puzzle')
  request.send()
}
