import Problem from './components/Problem.js';
import Answer from './components/Answer.js';

const shuffleArray = array => {
  let currentIndex = array.length;
  let randomIndex;

  while(currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const allProblems = [];
for(let number1 = 0; number1 <= 10; number1++) {
  for(let number2 = 0; number2 <= 10; number2++) {
    allProblems.push({
      number1,
      number2
    });
  }
}
shuffleArray(allProblems);

const { number1, number2 } = allProblems[0];
allProblems.shift();
Problem.generate(number1, number2);

const startTime = performance.now();

document.getElementById('one').addEventListener('click', () => Answer.add(1));
document.getElementById('two').addEventListener('click', () => Answer.add(2));
document.getElementById('three').addEventListener('click', () => Answer.add(3));
document.getElementById('four').addEventListener('click', () => Answer.add(4));
document.getElementById('five').addEventListener('click', () => Answer.add(5));
document.getElementById('six').addEventListener('click', () => Answer.add(6));
document.getElementById('seven').addEventListener('click', () => Answer.add(7));
document.getElementById('eight').addEventListener('click', () => Answer.add(8));
document.getElementById('nine').addEventListener('click', () => Answer.add(9));
document.getElementById('del').addEventListener('click', () => Answer.remove());
document.getElementById('zero').addEventListener('click', () => Answer.add(0));
document.getElementById('ok').addEventListener('click', () => {
  if(allProblems.length === 0) {
    const time = Math.round(performance.now() - startTime);
    // TODO: save score to highscore list in localstorage
    window.location.replace(`highscores.html?score=${time}`);
    return;
  }
  
  const { number1, number2 } = allProblems[0];
  allProblems.shift();
  Problem.checkAnswer(() => Problem.generate(number1, number2));
});
