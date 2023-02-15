// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.

// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const inputEl = document.querySelector("#validation-input");


inputEl.addEventListener("blur", () =>  {
    if (inputEl.value.length == inputEl.dataset.length) {
         inputEl.classList.add("valid");
    } else {
         inputEl.classList.add("invalid")
    }
})

// видалення класу для можливості багаторазової операції

inputEl.addEventListener("focus", () => inputEl.classList.remove("valid", "invalid"))