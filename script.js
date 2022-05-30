
const problemDiv = document.getElementById('problemDiv');

const randomInt = () => {
  return Math.floor(Math.random() * 11);
}

const showRandomProblem = () => {
  problemDiv.textContent = `${randomInt()}×${randomInt()}`;
}

showRandomProblem();

document.addEventListener('keydown', e => {
  showRandomProblem();
});