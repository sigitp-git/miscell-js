const puzzle = document.querySelector('#puzzle')
const attemptLeft = document.querySelector('#attempt-left')
const status = document.querySelector('#status')

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
