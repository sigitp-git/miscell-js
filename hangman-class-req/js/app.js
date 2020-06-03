const puzzle = document.querySelector('#puzzle')
const attemptLeft = document.querySelector('#attempt-left')
const status = document.querySelector('#status')

let game
let randomwords

const updateGame = () => {
  puzzle.innerHTML = ''
  attemptLeft.innerHTML = 'Attempt Left: ' + game.attemptLeft
  status.innerHTML = 'Status: ' + game.status()
  
  game.getPuzzle().split('').map((letter) => {
    const letterEl = document.createElement('span')
    letterEl.textContent = letter
    puzzle.appendChild(letterEl)
  })
}

const startGame = async () => {
  randomwords = await getPuzzle('2')
  game = new Hangman(randomwords, randomwords.length)
  // updateGame called after await getPuzzle('2') completed
  updateGame()
  console.log(randomwords)
}

// startGame here is referencing the callback function, not executing it
document.querySelector('#reset').addEventListener('click', startGame)
//startGame() only works after await getPuzzle('2') completed

// startGame() here is executing it as a function
startGame()

window.addEventListener('keypress', (e) => {
  game.makeGuess(e.key)
  updateGame()
})
