// Отримуємо список категорій 
const categoriesList = document.getElementById('categories');

// Отримуємо всі елементи категорій
const categoryItems = categoriesList.querySelectorAll('.item');

// Виводимо загальну кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

//Проходимо по кожній категорії та виводимо назву і кількість елементів
categoryItems.forEach(item => {
// Знаходимо заголовок <h2> всередині поточного li.item
  const title = item.querySelector('h2').textContent;

// Знаходимо вкладений список ul і рахуємо його дочірні li
  const elementsCount = item.querySelector('ul').children.length;

// Виводимо результат
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});