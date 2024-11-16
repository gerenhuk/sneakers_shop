// Отримуємо кнопки
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// Отримуємо всі зображення
const images = document.querySelectorAll('.collection-img');

// Функція для зміни зображень
function swapImages(index1, index2) {
    const tempSrc = images[index1].src;
    images[index1].src = images[index2].src;
    images[index2].src = tempSrc;
}

// Додаємо обробники подій для кнопок
nextButton.addEventListener('click', () => {
    swapImages(0, 1); // Змінюємо зображення місцями
});

prevButton.addEventListener('click', () => {
    swapImages(1, 0); // Змінюємо зображення місцями
});
