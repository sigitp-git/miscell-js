const puzzle = document.querySelector('#puzzle')
const attemptLeft = document.querySelector('#attempt-left')
const status = document.querySelector('#status')

let game
let randomwords

const updateGame = () => {
  puzzle.innerHTML = '<b>Puzzle: </b>' + game.getPuzzle()
  attemptLeft.innerHTML = '<b>Attempt Left: </b>' + game.attemptLeft
  status.innerHTML = '<b>Status: </b>' + game.status()
}

const startGame = async () => {
  randomwords = await getPuzzle('2')
  game = new Hangman(randomwords, randomwords.length)
  // updateGame called after await getPuzzle('2') completed
  updateGame()
  console.log(randomwords)
}

document.querySelector('#reset').addEventListener('click', startGame)
//startGame() only works after await getPuzzle('2') completed
startGame()

window.addEventListener('keypress', (e) => {
  game.makeGuess(e.key)
  updateGame()
})
