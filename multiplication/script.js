
const twoDigits = document.getElementById('two-digits');
const oneDigit = document.getElementById('one-digit');
const resultButton = document.getElementById('result-button');
const result = document.getElementById('result');

const two = Math.floor(100 * Math.random());
const one = Math.floor(10 * Math.random());

twoDigits.textContent = two;
oneDigit.textContent = one;

resultButton.addEventListener('click', () => {
  result.textContent = two * one;
});
