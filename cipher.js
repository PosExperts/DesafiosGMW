var fruits = [
  "PHISHING",
  "MALWARE",
  "E-COMMERCE",
  "INTERNET",
  "TRANSFER-365",
  "FIREWALL",
  "CUENTA",
  "FRAUDE",
  "BANCO",
  "HACKER",
  "SOFTWARE",
  "WI-FI",
  "CIBERDELINCUENTE"
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = fruits[Math.floor(Math.random() * fruits.length)];
}

function generateButtons(rows, columns) {
  let buttonsHTML = '';
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890';
  for (let i = 0; i < rows; i++) {
    buttonsHTML += '<div class="button-row">';
    for (let j = 0; j < columns; j++) {
      let index = i * columns + j;
      if (index < alphabet.length) {
        let letter = alphabet[index];
        buttonsHTML += `
          <button class="boton_letra" id='${letter}' onClick="handleGuess('${letter}')">
            ${letter}
          </button>
        `;
      }
    }
    buttonsHTML += '</div>';
  }

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './IMG/Cipher/' + mistakes + '.png';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'CORRECTO!!!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'RESPUESTA: ' + answer;
    document.getElementById('keyboard').innerHTML = 'PERDISTE!!!';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './IMG/Cipher/0.png';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons(2,5);
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons(7,5);
guessedWord();