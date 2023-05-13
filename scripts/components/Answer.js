
const outputElement = document.getElementById('answerDiv');

let answer = '0';

const get = () => {
  return parseInt(answer);
}

const set = newAnswer => {
  answer = String(newAnswer);
  outputElement.textContent = `= ${ newAnswer }`;
}

const add = number => {
  if(parseInt(answer) === 0) {
    set(number);
  } else {
    set(`${ answer }${ number }`);
  }
}

const remove = () => {
  if(answer === '0') return;
  const newAnswer = answer.slice(0, -1);
  if(newAnswer === '') {
    set('0');
  } else {
    set(newAnswer);
  }
}

const highlight = isRight => {
  outputElement.classList.remove('right-answer', 'wrong-answer', 'fade-out');
  outputElement.classList.add(isRight ? 'right-answer' : 'wrong-answer');
  setTimeout(() => outputElement.classList.add('fade-out'), 1);
}

export default { get, set, add, remove, highlight };