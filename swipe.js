let cardContainer = document.getElementById('cardContainer');
let isDragging = false;
let startX, offsetX;
let lastCardIndex = -1; // Initialize the index of the last card used

var maxturns = 11;
var isturn = 1;

document.addEventListener('mousedown', handleDragStart, false);
document.addEventListener('mousemove', handleDrag, false);
document.addEventListener('mouseup', handleDragEnd, false);

document.addEventListener('touchstart', handleDragStart, false);
document.addEventListener('touchmove', handleDrag, false);
document.addEventListener('touchend', handleDragEnd, false);

// Define a pool of card image paths
const cardPool = [
    './IMG/Swipe/mail1_right.png',
    './IMG/Swipe/malware1_left.png',
    './IMG/Swipe/malware2_left.png',
    './IMG/Swipe/malware3_left.png',
    './IMG/Swipe/malware4_left.png',
    './IMG/Swipe/malware5_left.png',
    './IMG/Swipe/malware6_left.png',
    './IMG/Swipe/mail2_right.png',
    './IMG/Swipe/malware7_left.png',
    './IMG/Swipe/malware8_left.png',
];

// Initial card creation
addNewCard();


function handleDragStart(event) {
    event.preventDefault();
    isDragging = true;
    startX = event.clientX || event.touches[0].clientX;
}

function handleDrag(event) {
    if (!isDragging) return;

    let x = event.clientX || event.touches[0].clientX;
    offsetX = x - startX;

    // Apply the drag transformation to the card
    let card = document.querySelector('.card');
    if (card) {
        card.style.transform = `translateX(${offsetX}px)`;
        
    }
}

let score = 0; // Initialize the score

function scorefinal() {

    if (isturn == maxturns){
        cardContainer.style.display = 'none';
        document.getElementById('scoreDisplay').style.display = 'none';

        var finalScoreText = document.createElement('p');
        finalScoreText.textContent = `PUNTAJE FINAL: `+score;
        finalScoreText.classList.add('final-score');
        document.body.appendChild(finalScoreText);

    }
    else{};
}




function handleDragEnd(event) {
    if (!isDragging) return;

    // Reset the card's position
    let card = document.querySelector('.card');
    if (card) {
        card.style.transform = 'translateX(0)';
        let cardId = card.getAttribute('data-card-id');
        let cardPath = card.querySelector('img').getAttribute('src');
        let feedbackMessage = '';
        let feedbackClass = '';

        if (offsetX > 50 && isCorrectDirection(cardPath, 'right')) {
            // Swiped right and correct direction
            console.log(`Card ${cardId} swiped right - Correct!`);
            feedbackMessage = `Correcto! +1`;
            feedbackClass = 'correct';
            score++; // Increment the score
            isturn++;
            scorefinal();
        } else if (offsetX < -50 && isCorrectDirection(cardPath, 'left')) {
            // Swiped left and correct direction
            console.log(`Card ${cardId} swiped left - Correct!`);
            feedbackMessage = `Correcto! +1`;
            feedbackClass = 'correct';
            score++; // Increment the score
            isturn++;
            scorefinal();
        } else {
            feedbackMessage = `Incorrecto!`;
            feedbackClass = 'incorrect';
            isturn++;
            scorefinal();
        }

        // Create a feedback element
        let feedback = document.createElement('div');
        feedback.className = 'feedback ' + feedbackClass;
        feedback.innerText = feedbackMessage;

        // Append the feedback to the card container
        cardContainer.appendChild(feedback);

        // Remove the feedback after a certain duration (e.g., 1 second)
        setTimeout(() => {
            feedback.remove();
        }, 3000);

        console.log(`Score: ${score}`);
        
   // Update the displayed score in the HTML
   document.getElementById('scoreDisplay').innerText = `Puntos: ${score}`;

        removeCard(card);
        addNewCard();
    }

    // Reset values
    isDragging = false;
    startX = offsetX = 0;
}

// Function to check if the dragging direction is correct based on the card path

function isCorrectDirection(cardPath, direction) {
    // Modify this function based on your logic for correct directions
    // For demonstration, assume that card paths ending with 'right.png' are correct for 'right' direction,
    // and paths ending with 'left.png' are correct for 'left' direction.
    return (cardPath.endsWith('right.png') && direction === 'right') ||
           (cardPath.endsWith('left.png') && direction === 'left');
}

function removeCard(card) {
    // Remove the card element from the DOM
    card.remove();
}

// Add a new card after the previous card is deleted
function addNewCard() {
    // Calculate the index for the next card
    lastCardIndex++;
    if (lastCardIndex >= cardPool.length) {
        lastCardIndex = 0; // Start over if reached the end of the pool
    }

    // Get the path for the next card
    let newCardPath = cardPool[lastCardIndex];

    // Add a new card
    let newCardId = Math.floor(Math.random() * 1000); // Use a unique ID for demonstration
    let newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.setAttribute('data-card-id', newCardId);
    newCard.innerHTML = `<img src="${newCardPath}" alt="Card ${newCardId}">`;

    // Attach event listeners to the new card
    newCard.addEventListener('mousedown', handleDragStart, false);
    newCard.addEventListener('mousemove', handleDrag, false);
    newCard.addEventListener('mouseup', handleDragEnd, false);

    newCard.addEventListener('touchstart', handleDragStart, false);
    newCard.addEventListener('touchmove', handleDrag, false);
    newCard.addEventListener('touchend', handleDragEnd, false);

    cardContainer.appendChild(newCard);
}
