// Отримуємо основне зображення та всі мініатюри
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail-grid img');

// Додаємо подію на кожну мініатюру
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Змінюємо src основного зображення на src мініатюри
        mainImage.src = this.src;
    });
});

// Вибір розміру
const sizeButtons = document.querySelectorAll('.size-btn');
sizeButtons.forEach(button => {
    button.addEventListener('click', function() {
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Вибір кольору
const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(button => {
    button.addEventListener('click', function() {
        colorButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Збільшення/зменшення кількості і оновлення ціни
const price = 350; // базова ціна
const quantityInput = document.getElementById('quantity');
const priceElement = document.querySelector('.price');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

function updatePrice() {
    const quantity = parseInt(quantityInput.value);
    priceElement.textContent = `$${(price * quantity).toFixed(2)}`;
}

increaseButton.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
    updatePrice();
});

decreaseButton.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        updatePrice();
    }
});