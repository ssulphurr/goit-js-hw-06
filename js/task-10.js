function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const boxesDivEl = document.querySelector("#boxes")
const inputEl = document.querySelector("#controls").firstElementChild;

let amount = 0;

inputEl.addEventListener("input", (event) => {
  amount = event.target.value;
})


function createBoxes(quantity) {
  const array = [];
  let a = 30;

  for (let i = 0; i < quantity; i += 1) {
    const box = document.createElement("div");
    box.style.width = a + "px";
    box.style.height = a + "px";
    box.style.backgroundColor = getRandomHexColor()

    array.push(box)
    a += 10; 
  }
  boxesDivEl.append(...array)

  boxesDivEl.style.display = "flex";
  boxesDivEl.style.flexWrap = "wrap"
  boxesDivEl.style.alignItems = "center";
  boxesDivEl.style.gap = "2px";
  boxesDivEl.style.marginTop = "10px"
}

function destroyBoxes() {
  boxesDivEl.innerHTML = "";
}

// buttons

const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");

btnCreateEl.addEventListener("click", () => createBoxes(amount));

btnDestroyEl.addEventListener("click", destroyBoxes)