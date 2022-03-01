const resetBtn = document.querySelector('#reset-btn');
const saveBtn = document.querySelector('#save-btn');

const blackBgBtn = document.querySelector('#black-bg-btn');
const blueBgBtn = document.querySelector('#blue-bg-btn');
const pinkBgBtn = document.querySelector('#pink-bg-btn');

const blackTextBtn = document.querySelector('#black-text-btn');
const redTextBtn = document.querySelector('#red-text-btn');
const whiteTextBtn = document.querySelector('#white-text-btn');

const smolTextBtn = document.querySelector('#smol-text-btn');
const mediumTextBtn = document.querySelector('#medium-text-btn');
const bigTextBtn = document.querySelector('#big-text-btn');

const twentyPxBtn = document.querySelector('#twenty-px-btn');
const thirtyPxBtn = document.querySelector('#thirty-px-btn');

const verdanaBtn = document.querySelector('#verdana-btn');
const monospaceBtn = document.querySelector('#monospace-btn');
const fantasyBtn = document.querySelector('#fantasy-btn');

const myMain = document.querySelector('#my-main');

let allClasses = 'basic ';

// Função pra cada botão coisar numa let

function reassignClasses() {
  myMain.className = allClasses;
}

function addBlackBg() {
  allClasses += 'dark-background ';
  reassignClasses();
}

function addBlueBg() {
  allClasses += 'soft-blue-background ';
  reassignClasses();
}

function addPinkBg() {
  allClasses += 'soft-pink-background ';
  reassignClasses();
}

function blackWords() {
  allClasses += 'black-words ';
  reassignClasses();
}

function redWords() {
  allClasses += 'red-words ';
  reassignClasses();
}

function whiteWords() {
  allClasses += 'white-words ';
  reassignClasses();
}

function smolFont() {
  allClasses += 'smol ';
  reassignClasses();
}

function mediumFont() {
  allClasses += 'bigger ';
  reassignClasses();
}

function bigFont() {
  allClasses += 'i-said-bigger ';
  reassignClasses();
}

function twentyPx() {
  allClasses += 'twenty ';
  reassignClasses();
}

function thirtyPx() {
  allClasses += 'thirty ';
  reassignClasses();
}

function verdanaFont() {
  allClasses += 'verdana ';
  reassignClasses();
}

function monospaceFont() {
  allClasses += 'monospace ';
  reassignClasses();
}

function fantasyFont() {
  allClasses += 'fantasy ';
  reassignClasses();
}

function reset() {
  allClasses = 'basic ';
  reassignClasses();
}

function saveLocalStorage() {
  localStorage.setItem('classes', allClasses);
}

window.onload = () => {
  resetBtn.addEventListener('click', reset);
  saveBtn.addEventListener('click', saveLocalStorage);
  blackBgBtn.addEventListener('click', addBlackBg);
  blueBgBtn.addEventListener('click', addBlueBg);
  pinkBgBtn.addEventListener('click', addPinkBg);
  blackTextBtn.addEventListener('click', blackWords);
  redTextBtn.addEventListener('click', redWords);
  whiteTextBtn.addEventListener('click', whiteWords);
  smolTextBtn.addEventListener('click', smolFont);
  mediumTextBtn.addEventListener('click', mediumFont);
  bigTextBtn.addEventListener('click', bigFont);
  twentyPxBtn.addEventListener('click', twentyPx);
  thirtyPxBtn.addEventListener('click', thirtyPx);
  verdanaBtn.addEventListener('click', verdanaFont);
  monospaceBtn.addEventListener('click', monospaceFont);
  fantasyBtn.addEventListener('click', fantasyFont);
}
