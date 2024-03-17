var palabra = [
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

shuffle(palabra); // Shuffle the words at the start of the game


let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
let wordIndex = 0; // Initialize word index

var pcorrect = 0;
var pincorrect = 0;
var QuedanP = palabra.length;

document.getElementById('quedan').textContent = palabra.length;

function updateQuedanP(){
  document.getElementById('quedan').textContent = QuedanP;
}


function updatePcorrect() {
  document.getElementById('pcorrect').textContent = pcorrect;
}
function updatePincorrect() {
  document.getElementById('pincorrect').textContent = pincorrect;
}

function randomWord() {
  if (wordIndex >= palabra.length) { // If all words have been used, shuffle and reset index
    shuffle(palabra);
    wordIndex = 0;
  }
  answer = palabra[wordIndex];
  wordIndex++;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generateButtons(rows, columns) {
  let buttonsHTML = '';
  let alphabet = 'QWERTYUIOPASDFGHJKLÑZXCVBNM-0123456789';
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
    pcorrect++; 
    updatePcorrect();
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'RESPUESTA: ' + answer;
    document.getElementById('keyboard').innerHTML = 'INCORRECTO!!!';
    pincorrect++;
    updatePincorrect();
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
  if (QuedanP > 0) {
     mistakes = 0;
     guessed = [];
     document.getElementById('hangmanPic').src = './IMG/Cipher/0.png';

     randomWord();
     guessedWord();
     updateMistakes();
     generateButtons(4,10);
     QuedanP--;
     updateQuedanP();
  } 
  else if (QuedanP === 0) {
    document.getElementById('keyboard').innerHTML ='!FIN!<br><br>'+pcorrect+'<br>CORRECTAS<br><br>'+' '+pincorrect+'<br>INCORRECTAS';
    document.getElementById('minimenu').innerHTML = ' ';
    QuedanP--;
  }
  else if (QuedanP <0) {
    location.reload();
  }
}
document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons(4,10);
guessedWord();