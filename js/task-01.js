// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories 
// знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і 
// кількість елементів в категорії (усіх <li>, вкладених в нього).

const categoriesMainListEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesMainListEl.children.length}`)



const categoryItemsEl = document.querySelectorAll('.item');

for (const item of categoryItemsEl) {
    console.log(`Category: ${item.firstElementChild.textContent}`);

    const smallCategoryItemsEl = item.lastElementChild.children.length
    console.log(`Elements: ${smallCategoryItemsEl}`)
}