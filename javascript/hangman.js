class Hangman {
	constructor(words) {
		this.words = words;
		// ... your code goes here
		this.secretWord = '';
		this.letters = [];
		this.guessedLetters = '';
		this.errorsLeft = 10;
	}

	pickWord() {
		// ... your code goes here
		let arrayWords = this.words;
		return arrayWords[Math.floor(Math.random() * arrayWords.length)];
	}

	checkIfLetter(keyCode) {
		// ... your code goes here
		return keyCode >= 65 && keyCode <= 90 ? true : false;
	}

	//checkClickedLetters(letter) - a method that should check if the letter passed as an argument has
	// already been pressed. It should return true if it was not or false in the opposite case.
	checkClickedLetters(letter) {
		// ... your code goes here
		if (this.letters.includes(letter)) {
			return false;
		} else {
			this.letters.push(letter);
			return true;
		}
	}

	/*addCorrectLetter(letter) - a method that should add the passed letter
   to the guessedLetters property. This could be a good place to check if the user won.*/
	addCorrectLetter(letter) {
		// ... your code goes here
		this.guessedLetters += letter;
		this.checkWinner();
	}

	addWrongLetter(letter) {
		// ... your code goes here
		return this.errorsLeft--;
	}

	checkGameOver() {
		// ... your code goes here
		return this.errorsLeft === 0 ? true : false;
	}

	checkWinner() {
		// ... your code goes here
		if (this.secretWord) return true;
	}
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
	startGameButton.addEventListener('click', (event) => {
		hangman = new Hangman([ 'node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa' ]);

		// HINT (uncomment when start working on the canvas portion of the lab)
		// hangman.secretWord = hangman.pickWord();
		// hangmanCanvas = new HangmanCanvas(hangman.secretWord);

		// ... your code goes here
	});
}

document.addEventListener('keydown', (event) => {
	// React to user pressing a key
	// ... your code goes here
});
