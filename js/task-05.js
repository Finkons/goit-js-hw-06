const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener('input', event => {
  if (inputText.value.length === 0) {
    outputText.textContent = 'Anonymous'
  } else { outputText.textContent = inputText.value }
})
