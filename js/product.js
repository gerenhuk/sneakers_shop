// Отримуємо всі <li> елементи з класом 'category-item' і 'filter-item'
document.querySelectorAll('.category-item, .filter-item').forEach(item => {
    item.addEventListener('click', function() {
        // Отримуємо інпут всередині <li>
        const checkbox = this.querySelector('input[type="checkbox"]');
        
        // Перемикаємо стан чекбоксу (checked/unchecked)
        checkbox.checked = !checkbox.checked;
    });
});


