
const answerDiv = document.getElementById('answerDiv');

let answer = '0';

const get = () => {
  return answer;
}

const set = newAnswer => {
  answer = String(newAnswer);
  answerDiv.textContent = `= ${ newAnswer }`;
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

export default { get, set, add, remove };