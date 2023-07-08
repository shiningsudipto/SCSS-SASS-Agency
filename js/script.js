const slider = document.querySelector('.slider');
const cardsContainer = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.sliderCard');

let currentPosition = 0;

function showSlide(position) {
    currentPosition = position;
    const slideWidth = slider.offsetWidth;
    const slideToShow = Math.min(cards.length, 3);
    const transformValue = -position * (slideWidth / slideToShow);
    cardsContainer.style.transform = `translateX(${transformValue}px)`;
}

showSlide(currentPosition);

// Event listeners for navigation buttons
document.getElementById('prev-btn').addEventListener('click', function () {
    if (currentPosition > 0) {
        showSlide(currentPosition - 1);
    }
});

document.getElementById('next-btn').addEventListener('click', function () {
    if (currentPosition < cards.length - 3) {
        showSlide(currentPosition + 1);
    }
});
