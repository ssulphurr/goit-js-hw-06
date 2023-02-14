// Створи змінну counterValue, в якій буде зберігатися 
// поточне значення лічильника та ініціалізуй її значенням 0.

// Додай слухачів кліків до кнопок, 
// всередині яких збільшуй або зменшуй значення лічильника.

// Оновлюй інтерфейс новим значенням змінної counterValue.

const valueEl = document.querySelector('#value');

let counterValue = 0;

const decreaseBtn = document.querySelector('[data-action="decrement"]');
const handlerDecr = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue
}
decreaseBtn.addEventListener("click", handlerDecr);


const increseBtn = document.querySelector('[data-action = "increment"]');
const handlerIncr = () =>{
    counterValue += 1;
    valueEl.textContent = counterValue
}
increseBtn.addEventListener("click", handlerIncr);
