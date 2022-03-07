const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function adicionaTurno(objeto, chave, valor) {
  objeto[chave] = valor;
}

adicionaTurno(lesson2, 'turno', 'noite');
// console.log(lesson2);

function listarKeys(objeto) {
  for (key in objeto) {
    console.log(key);
  }
}
// listarKeys(lesson2);


const listaDeKeys = (objeto) => Object.keys(objeto);
// console.log(listaDeKeys(lesson2));

const tamanhoObjeto = (objeto) => Object.keys(objeto).length;
// console.log(tamanhoObjeto(lesson2));

const valores = (objeto) => Object.values(objeto);
// console.log(valores(lesson2));

const allLessons = Object.assign({}, {lesson1,lesson2,lesson3});
// console.log(allLessons);

const todosEstudantes = (objeto) => parseInt(objeto.lesson1.numeroEstudantes, 10) + parseInt(objeto.lesson2.numeroEstudantes, 10) + parseInt(objeto.lesson3.numeroEstudantes, 10);
// console.log(todosEstudantes(allLessons));

const indexObj = (objeto, numero) => Object.values(objeto)[numero];
// console.log(indexObj(lesson2, 2));

function contemNoObjeto(objeto, chave, valor) {
  isThere = false;
  for (key in objeto) {
    if (key === chave && objeto[key] === valor) {
      isThere = true;
      return isThere;
    }
  }
}

// console.log(contemNoObjeto(lesson3, 'turno', 'noite'));


/* 
Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
Crie uma função para mostrar o tamanho de um objeto.
Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
*/