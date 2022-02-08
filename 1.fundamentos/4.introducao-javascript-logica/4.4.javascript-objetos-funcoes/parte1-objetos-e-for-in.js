// Parte 1 - Part 1;

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// Exercício 1 / Exercise 1

console.log('Bem-vinda, ' + info.personagem);

// Exercício 2 / Exercise 2

info.recorrente = "Sim";

console.log(info);

// Exercício 3 / Exercise 3

for (let key in info) {
    console.log(key);
}

// Exercício 4 / Exercise 4

for (let key in info) {
    console.log(info[key]);
}

// Exercício 5 / Exercise 5

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O última MacPatinhas',
    recorrente: 'Sim'
}

for (let key in info) {
    if (key === 'recorrente' && info['recorrente'] === 'Sim' && info2['recorrente'] === 'Sim') {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    }
}

// Exercício 6 / Exercise 6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama', leitor.livrosFavoritos[0].titulo);

// Exercício 7 / Exercise 7

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

console.log(leitor);

// Exercício 8 / Exercise 8

console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos.');