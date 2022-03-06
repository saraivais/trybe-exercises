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
const gillBtn = document.querySelector('#gill-btn');

const myMain = document.querySelector('#my-main');

function addBlackBg() {
  myMain.classList.toggle('dark-background');
  if (myMain.classList.contains('soft-blue-background') || myMain.classList.contains('soft-pink-background')) {
    myMain.classList.remove('soft-blue-background');
    myMain.classList.remove('soft-pink-background');
  }
}

function addBlueBg() {
  myMain.classList.toggle('soft-blue-background');
  if (myMain.classList.contains('dark-background') || myMain.classList.contains('soft-pink-background')) {
    myMain.classList.remove('dark-background');
    myMain.classList.remove('soft-pink-background');
  }
}

function addPinkBg() {
  myMain.classList.toggle('soft-pink-background');
  if (myMain.classList.contains('soft-blue-background') || myMain.classList.contains('dark-background')) {
    myMain.classList.remove('soft-blue-background');
    myMain.classList.remove('dark-background');
  }
}

function blackWords() {
  myMain.classList.toggle('black-words');
  if (myMain.classList.contains('red-words') || myMain.classList.contains('white-words')) {
    myMain.classList.remove('red-words');
    myMain.classList.remove('white-words');
  }
}

function redWords() {
  myMain.classList.toggle('red-words');
  if (myMain.classList.contains('black-words') || myMain.classList.contains('white-words')) {
    myMain.classList.remove('black-words');
    myMain.classList.remove('white-words');
  }
}

function whiteWords() {
  myMain.classList.toggle('white-words');
  if (myMain.classList.contains('red-words') || myMain.classList.contains('black-words')) {
    myMain.classList.remove('red-words');
    myMain.classList.remove('black-words');
  }
}

function smolFont() {
  myMain.classList.toggle('smol');
  if (myMain.classList.contains('bigger') || myMain.classList.contains('i-said-bigger')) {
    myMain.classList.remove('bigger');
    myMain.classList.remove('i-said-bigger');
  }
}

function mediumFont() {
  myMain.classList.toggle('bigger');
  if (myMain.classList.contains('smol') || myMain.classList.contains('i-said-bigger')) {
    myMain.classList.remove('smol');
    myMain.classList.remove('i-said-bigger');
  }
}

function bigFont() {
  myMain.classList.toggle('i-said-bigger');
  if (myMain.classList.contains('smol') || myMain.classList.contains('bigger')) {
    myMain.classList.remove('smol');
    myMain.classList.remove('bigger');
  }
}

function twentyPx() {
  myMain.classList.toggle('twenty');
  if (myMain.classList.contains('thirty')) {
    myMain.classList.remove('thirty');
  }
}

function thirtyPx() {
  myMain.classList.toggle('thirty');
  if (myMain.classList.contains('twenty')) {
    myMain.classList.remove('twenty');
  }
}

function verdanaFont() {
  myMain.classList.toggle('verdana');
  if (myMain.classList.contains('monospace') || myMain.classList.contains('gill')) {
    myMain.classList.remove('monospace');
    myMain.classList.remove('gill');
  }
}

function monospaceFont() {
  myMain.classList.toggle('monospace');
  if (myMain.classList.contains('verdana') || myMain.classList.contains('gill')) {
    myMain.classList.remove('verdana');
    myMain.classList.remove('gill');
  }
}

function gillFont() {
  myMain.classList.toggle('gill');
  if (myMain.classList.contains('verdana') || myMain.classList.contains('monospace')) {
    myMain.classList.remove('verdana');
    myMain.classList.remove('monospace');
  }
}

function reset() {
  myMain.className = 'basic';
  localStorage.clear();
}

function saveLocalStorage() {
  const allClasses = myMain.classList;
  localStorage.setItem('all-classes', allClasses.value);
}

function retrieveClasses() {
  const allClassesToAdd = localStorage.getItem('all-classes');
  myMain.className = allClassesToAdd;
}

window.onload = () => {
  retrieveClasses();
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
  gillBtn.addEventListener('click', gillFont);
}
