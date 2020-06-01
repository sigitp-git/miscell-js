const puzzle = document.querySelector('#puzzle')
const attemptLeft = document.querySelector('#attempt-left')
const status = document.querySelector('#status')

const game1 = new Hangman('cat', 3)

// returns promize 'data' from request.js getPuzzle()
getPuzzle('2').then((puzzle) => {
  console.log(`Fetched: ${puzzle}`)
}).catch((err) => {
  console.log(err)
})

// doing this below won't work since we have HTTP conn time, use above instead
//console.log(getPuzzle())

const updateGame = () => {
  puzzle.innerHTML = '<b>Puzzle: </b>' + game1.getPuzzle()
  attemptLeft.innerHTML = '<b>Attempt Left: </b>' + game1.attemptLeft
  status.innerHTML = '<b>Status: </b>' + game1.status()
}

updateGame()

window.addEventListener('keypress', (e) => {
  game1.makeGuess(e.key)
  updateGame()
})
