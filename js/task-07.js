const rangeEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

rangeEl.addEventListener("change", () => {
    textEl.style.fontSize = `${rangeEl.value}px`;
})