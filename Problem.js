import statistics from './statistics.js';
import Answer from './Answer.js';

const problemDiv = document.getElementById('problemDiv');

let number1;
let number2;
let startTime;

const generate = () => {
  [number1, number2] = statistics.getProblem();
  problemDiv.textContent = `${number1}×${number2}`;

  startTime = performance.now();
}

const checkAnswer = () => {
  const answer = Answer.get();
  const isRight = parseInt(answer) === number1 * number2;

  Answer.set('0');

  answerDiv.className = '';
  answerDiv.classList.add(isRight ? 'right-answer' : 'wrong-answer');
  setTimeout(() => answerDiv.classList.add('fade-out'), 1);

  if(isRight) {
    const problemDuration = performance.now() - startTime;
    statistics.addTime(number1, number2, problemDuration);

    generate();
  }
}

export default { generate, checkAnswer };