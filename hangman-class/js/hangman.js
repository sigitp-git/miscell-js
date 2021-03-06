class Hangman {
  constructor(word, attemptLeft) {
    this.word = word.toLowerCase().split('')
    this.attemptLeft = attemptLeft
    this.guessedLetters = []
  }

  getPuzzle() {
    let puzzle = ''

    this.word.map(
      (char) =>
        (puzzle +=
          this.guessedLetters.includes(char) || char === ' ' ? char : '*')
    )

    return puzzle
  }

  makeGuess(guess) {
    if (this.attemptLeft > 0) {
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
  }

  status() {
    let status = ''
    const finished = this.word.every((char) =>
      this.guessedLetters.includes(char) || char === ' '
    )

    if (this.attemptLeft === 0) {
      status = `FAILED!, the answer is: "${this.word.join('')}"`
    } else if (finished) {
      status = 'CONGRATS!!'
    } else {
      status = 'playing'
    }

    return status
  }
}
