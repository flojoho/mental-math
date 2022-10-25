import statistics from './statistics.js';

const problemDiv = document.getElementById('problemDiv');
const answerDiv = document.getElementById('answerDiv');

let number1;
let number2;
let answer = '0';
let startTime;

const updateProblem = () => {
  [number1, number2] = statistics.getProblem();
  problemDiv.textContent = `${number1}×${number2}`;

  startTime = performance.now();
}
updateProblem();

const setAnswer = newAnswer => {
  answer = String(newAnswer);
  answerDiv.textContent = `= ${ newAnswer }`;
}

const enterNumber = number => {
  if(parseInt(answer) === 0) {
    setAnswer(number);
  } else {
    setAnswer(`${ answer }${ number }`);
  }
}

const removeNumber = () => {
  if(answer === '0') return;
  const newAnswer = answer.slice(0, -1);
  if(newAnswer === '') {
    setAnswer('0');
  } else {
    setAnswer(newAnswer);
  }
}

const checkAnswer = () => {
  const isRight = parseInt(answer) === number1 * number2;

  setAnswer('0');

  answerDiv.className = '';
  answerDiv.classList.add(isRight ? 'right-answer' : 'wrong-answer');
  setTimeout(() => answerDiv.classList.add('fade-out'), 1);

  if(isRight) {
    const problemDuration = performance.now() - startTime;
    statistics.addTime(number1, number2, problemDuration);

    updateProblem();
  }
}

document.getElementById('one').addEventListener('click', () => enterNumber(1));
document.getElementById('two').addEventListener('click', () => enterNumber(2));
document.getElementById('three').addEventListener('click', () => enterNumber(3));
document.getElementById('four').addEventListener('click', () => enterNumber(4));
document.getElementById('five').addEventListener('click', () => enterNumber(5));
document.getElementById('six').addEventListener('click', () => enterNumber(6));
document.getElementById('seven').addEventListener('click', () => enterNumber(7));
document.getElementById('eight').addEventListener('click', () => enterNumber(8));
document.getElementById('nine').addEventListener('click', () => enterNumber(9));
document.getElementById('del').addEventListener('click', () => removeNumber());
document.getElementById('zero').addEventListener('click', () => enterNumber(0));
document.getElementById('ok').addEventListener('click', () => checkAnswer());