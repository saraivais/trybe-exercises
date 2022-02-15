function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercício 1:

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let daysContainer = document.querySelector('#days');

function createAndAddDay(array, tagType, parentContainer) {
  for (let index = 0; index < array.length; index += 1) {
    //criar
    let newLi = document.createElement(tagType);
    newLi.innerText = array[index];
    newLi.className = 'day';
    if (array[index] === 24 || array[index] === 25 || array[index] === 31) {
      newLi.className += ' holiday';
    } 
    if (array[index] === 4 || array[index] === 11 || array[index] === 18 || array[index] === 25) {
      newLi.className += ' friday';
    }

    //adicionar
    parentContainer.appendChild(newLi);
  }
}

createAndAddDay(dezDaysList, 'li', daysContainer);

// Exercício 2: criar uma função que dinamicamente crie botões;

let buttonContainer = document.querySelector('.buttons-container');

function createAndAddButton (string, parentContainer, id) {
  let newButton = document.createElement('button');
  newButton.innerText = string;
  newButton.id = id;

  parentContainer.appendChild(newButton);
}

createAndAddButton('Feriados', buttonContainer, 'btn-holiday');

// Exercício 3: 

function changeColorHoliday() {
  let holidays = document.querySelectorAll('.holiday');
  
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === 'rgb(92, 255, 127)') {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
    holidays[index].style.backgroundColor = 'rgb(92, 255, 127)';
    }
  }
}

// Adicionar click no botão

let buttonHoliday = document.getElementById('btn-holiday');

buttonHoliday.addEventListener('click', changeColorHoliday);

// Exercício 4:

createAndAddButton('Sexta-feira', buttonContainer, 'btn-friday');

// Exercício 5:

function changeFridayText() {
  let fridays = document.getElementsByClassName('friday');
  let daysToBe = ['4', '11', '18', '25'];

  for (let index = 0; index < fridays.length; index += 1) {

    if (fridays[index].innerText !== 'SEXTOU') {
      fridays[index].innerText = 'SEXTOU';
    } else {
      fridays[index].innerText = daysToBe[index];
    }
  }
}

let buttonFriday = document.getElementById('btn-friday');

buttonFriday.addEventListener('click', changeFridayText);

// Exercício 6: Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// mouse over e mouse out;

let days = document.getElementsByClassName('day');
console.log(days);

function zoomIn(event) {
  event.target.style.fontSize = '50px';
}

function zoomOut(event) {
  event.target.style.fontSize = '20px';
}

for (day of days) {
  day.addEventListener('mouseover', zoomIn);
  day.addEventListener('mouseout', zoomOut);
}

// Exercício 7: Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa. O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

let myTasks = document.querySelector('.my-tasks');

function createAndAddElement(string, parentContainer, tagName) {
  let newElement = document.createElement(tagName);
  newElement.innerText = string;
  parentContainer.appendChild(newElement);
}

createAndAddElement('Cozinhar e xablau', myTasks, 'span');

// Exercício 8: Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task. O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada. O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function createSubtitle(stringColor, parentContainer, className) {
  let newElement = document.createElement('div');
  newElement.style.backgroundColor = stringColor;
  newElement.className = className;

  parentContainer.appendChild(newElement);
}

createSubtitle('rgb(53, 195, 124)', myTasks, 'task');


// Exercício 9: Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada. 
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function addEventListenerToClass() {
  let divs = document.querySelectorAll('.my-tasks div');
  console.log(divs);

  for (div of divs) {
    div.addEventListener('click', function() {
      if (div.className === 'task') {
        div.className = 'task-selected';
      } else if (div.className === 'task-selected') {
        div.className = 'task';
      }
    })
  }
}

addEventListenerToClass();

// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

// try