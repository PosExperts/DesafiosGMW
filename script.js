let isDragging = false;
let initialX = 0;
let currentCard = 1;

const cardContainer = document.getElementById('cardContainer');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousedown', handleDragStart);
    card.addEventListener('touchstart', handleDragStart);

    card.addEventListener('mousemove', handleDragMove);
    card.addEventListener('touchmove', handleDragMove);

    card.addEventListener('mouseup', handleDragEnd);
    card.addEventListener('touchend', handleDragEnd);
});

function handleDragStart(e) {
    isDragging = true;
    initialX = e.clientX || e.touches[0].clientX;
    this.classList.add('grabbed');
}

function handleDragMove(e) {
    if (!isDragging) return;

    const currentX = e.clientX || e.touches[0].clientX;
    const deltaX = currentX - initialX;

    cards.forEach(card => {
        card.style.transform = `translateX(${deltaX}px)`;
    });
}

function handleDragEnd() {
    if (!isDragging) return;

    isDragging = false;
    cards.forEach(card => {
        card.style.transform = '';
        card.classList.remove('grabbed');
    });

    const threshold = 50;

    if (initialX - e.clientX > threshold && currentCard < cards.length) {
        currentCard++;
    } else if (e.clientX - initialX > threshold && currentCard > 1) {
        currentCard--;
    }

    // Move cards back to their original position
    const translateValue = `-${(currentCard - 1) * 100}%`;
    cardContainer.style.transform = `translateX(${translateValue})`;
}
