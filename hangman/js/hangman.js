const Hangman = function (word, attemptLeft) {
  this.word = word.toLowerCase().split('')
  this.attemptLeft = attemptLeft
  this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''

  this.word.map(
    (char) =>
      (puzzle +=
        this.guessedLetters.includes(char) || char === ' ' ? char : '*')
  )

  return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase()
  const isUnique = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)

  if (isUnique) {
    this.guessedLetters.push(guess)
  }

  if (isUnique && isBadGuess) {
    this.attemptLeft--
  }
}

Hangman.prototype.status = function () {
  let status = ''
  const finished = this.word.every((char) => this.guessedLetters.includes(char))

  if (this.attemptLeft <= 0) {
    status = 'FAILED!'
  } else if (finished) {
    status = 'CONGRATS!!'
  } else {
    status = 'playing'
  }

  return status
}

const game1 = new Hangman('cat', 3)
