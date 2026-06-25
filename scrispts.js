console.log("sdvojksdvnkdsvkndsvjsdvnjsdvjndv")
// Находим ВСЕ элементы с такими классами
const productNames = document.querySelectorAll('.js-store-prod-name.js-product-name.t-store__card__title');

// Перебираем их циклом и меняем текст каждому
productNames.forEach(item => {
    item.textContent = "Новое имя для всех товаров";
});
