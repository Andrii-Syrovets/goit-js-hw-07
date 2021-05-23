// Напиши скрипт який, при наборі тексту в інпут `input#name-input` (подія input),
// підставляє його поточне значення в `span#name-output`. якщо інпут порожній, в
// спані повинен відображатися рядок `'незнайомець'`.


const inputEl = document.querySelector("input");
console.log(inputEl.textContent);
const spanEl = document.querySelector("span");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  spanEl.textContent = event.currentTarget.value;
  if (spanEl.textContent.trim() === "" ) {
    spanEl.textContent = "незнайомець";
  }
}