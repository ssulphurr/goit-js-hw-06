function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change - color і 
// виводить значення кольору в span.color.

const bntEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

bntEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();

  spanEl.textContent = getRandomHexColor()
})
