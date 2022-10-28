import statistics from '../statistics.js';
import Answer from './Answer.js';

const outputElement = document.getElementById('problemDiv');

let number1;
let number2;
let startTime;
let callback = () => {};

const generate = (firstNumber, secondNumber) => {
  if(!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) throw new Error('Expected 2 integers');

  number1 = firstNumber;
  number2 = secondNumber;
  callback = callback;

  outputElement.textContent = `${number1}×${number2}`;
  startTime = performance.now();
}

const checkAnswer = callback => {
  if(typeof callback !== 'function') throw new Error('Expected callback function');
  
  const answer = Answer.get();
  const isRight = answer === number1 * number2;

  Answer.set('0');
  Answer.highlight(isRight);

  if(isRight) {
    const problemDuration = performance.now() - startTime;
    statistics.addTime(number1, number2, problemDuration);

    callback();
  }
}

export default { generate, checkAnswer };