const velueEl = document.querySelector('#value');
const butonsEl = document.querySelector('#counter');
let counter = 0;

butonsEl.firstElementChild.addEventListener('click', event => {
  velueEl.textContent = counter -= 1;
});

butonsEl.lastElementChild.addEventListener('click', event => {
  velueEl.textContent = counter += 1;
});