// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на
// правильну кількість символів.

const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", onIpnutBlur);

function onIpnutBlur(event) {
  const borderActiv = event.currentTarget;
  console.log(event.currentTarget.value);
  borderActiv.classList.remove("valid", "invalid");
  event.currentTarget.value.length === Number(inputEl.dataset.length)
    ? borderActiv.classList.add("valid")
    : borderActiv.classList.add("invalid");
}