
const problemDiv = document.getElementById('problemDiv');
const answerDiv = document.getElementById('answerDiv');

const randomInt = () => {
  return Math.floor(Math.random() * 11);
}

let number1;
let number2;
let answer = '0';

const generateProblem = () => {
  number1 = randomInt();
  number2 = randomInt()
  problemDiv.textContent = `${number1}×${number2}`;
}
generateProblem();

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

  if(isRight) generateProblem();
}