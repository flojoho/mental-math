import Problem from './Problem.js';
import Answer from './Answer.js';

Problem.generate();

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
document.getElementById('ok').addEventListener('click', () => Problem.checkAnswer());
