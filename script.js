// Получаем элементы со страницы
const productSelect = document.getElementById('product');
const quantityInput = document.getElementById('quantity');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

// Функция расчета стоимости
function calculateTotal() {
    const price = parseFloat(productSelect.value); // Получаем цену выбранного товара
    const quantity = parseInt(quantityInput.value); // Получаем количество товара
    const total = price * quantity; // Рассчитываем общую стоимость
    if(total<0){
        result.textContent = `ИЗВИНИТЕ, НО ПРОЧИТАТЬ КНИГУ ВСЁ ЖЕ ПРИДЁТСЯ!`;
    }
    else{
        result.textContent = `Стоимость: ${total} руб.`; // Выводим результат
    }
    
}

// Обработчик события нажатия на кнопку
calculateBtn.addEventListener('click', calculateTotal);
