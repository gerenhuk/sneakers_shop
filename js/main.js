document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.catalog__items');
    const items = document.querySelectorAll('.catalog__item');
    const nextButton = document.querySelector('.circle-button.right');
    const prevButton = document.querySelector('.circle-button.left');

    let currentIndex = 0;
    const itemsToShow = 4; // Кількість елементів, що відображаються одночасно
    const itemWidth = items[0].offsetWidth; // Ширина одного елемента

    // Функція для переміщення слайдера
    function moveSlider(index) {
        const translateX = -(index * itemWidth);
        slider.style.transform = `translateX(${translateX}px)`;
    }

    // Функція для перемикання на наступний слайд
    function showNextSlide() {
        if (currentIndex < items.length - itemsToShow) {
            currentIndex++;
        } else {
            currentIndex = 0; // Повертаємось до початку, якщо дійшли до кінця
        }
        moveSlider(currentIndex);
    }

    // Функція для перемикання на попередній слайд
    function showPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - itemsToShow; // Повертаємось до кінця, якщо ми на початку
        }
        moveSlider(currentIndex);
    }

    // Обробники подій для кнопок
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // Автоматичне перемикання слайдів кожні 3 секунди
    // setInterval(showNextSlide, 4000);
});
