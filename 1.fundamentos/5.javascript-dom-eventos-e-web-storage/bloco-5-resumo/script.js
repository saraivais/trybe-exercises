// 5.1 

//getElementById - ele vai buscar um elemento pela ID dele, e vai ter retornar um elemento só. 

let section = document.getElementById('section1');
// console.log(section);

//getElementsByClassName - ele vai buscar uma única classe que você passa e vai te retornar SEMPRE um array;

let myDivs = document.getElementsByClassName('divs');
// console.log(myDivs);

//getElementsByTagName - ele vai buscar uma única tag que você deu e vai retornar SEMPRE um array;

let myDivs2 = document.getElementsByTagName('div');
// console.log(myDivs2);

//querySelector & querySelectorAll - se você usar o querySelector para uma classe, ele vai te devolver só a primeira aparição daquele classe. Se você usar o querySelectorAll para uma classe, ele vai te devolver um array com todos os elementos que tem aquela classe.
// É importante CSS: .class #id
// Pode usar descendencia. 

let myP = document.querySelector('#section1 div p');
// console.log(myP);

// 5.2

// Busca elementos;

// parentNode - a gente está num lugar. Esse comando devolve o nome do pai desse lugar, que pode ser nó e elemento;

let myDiv = document.querySelector('#div1');
// console.log(myDiv.parentNode);
console.log(myDiv.parentNode.parentNode);

// parentElement - mesma coisa do parentNode, só que só me retorna um elemento;
// childNodes - retorna os filhos nós de onde eu estou;
// children - retorna os filhos elementos de onde eu estou; que também são nós, mas são primariamente elementos.

// firstChild - retorna o primeiro nó, que pode ser qualquer coisa, inclusive um comentário;
// firstElementChild - retorna o primeiro filho elemento, que é uma tag;

// lastChild;
// lastElementChild;

// nextSibling;
// nextElementSibling;

// previousSibling;
// previousElementSibling;

let xablau = document.querySelector('#xablau');
console.log(xablau);
console.log(xablau.parentNode.parentNode.nextElementSibling);

// Cria elementos;

// createElement('tag') - somente, só e somente só, cria um elemento do tipo (tag) especificado.

let main = section.parentNode;
// console.log(main);

let newSection = document.createElement('section');
newSection.innerText = 'FUNCIONOU, CACETE';

// appendChild - ele posiciona, dentro do lugar pai (que neste caso é o main), um elemento que já deve ter sido criado por um createElement. 
main.appendChild(newSection);

// Remove elementos;

// remove() - ele remove EXATAMENTE onde você está. Pra usar o remove, você tem que navegar até onde você quer excluir e usar o remove() lá.

let sectionToRemove = main.lastElementChild;
sectionToRemove.remove();

// removeChild() - primeiramente, você tem que estar no PAI. O removeChild, ele remove NÓS, então você tem que usar a NODEList como array e passar o índice do que você quer remover;
console.log(main.childNodes);
main.removeChild(main.childNodes[5]);

console.log(main.childNodes);

// 5.3

// Eventos - coisas que acontecem que permitem que a página mude. por interação do usuário ou não;
// Como um evento acontece? Ele nunca acontece do nada, a gente tem que ESPERAR por ele;

xablau.style.backgroundColor = 'blue';

xablau.addEventListener('click', function() {
    if (xablau.style.backgroundColor === 'blue') {
        xablau.style.backgroundColor = 'black';
        xablau.style.color = 'white';
    } else {
        xablau.style.backgroundColor = 'blue';
        xablau.style.color = 'black';
    }
})

section.addEventListener('mouseover', changeColor);
section.addEventListener('mouseout', changeColorBack);

function changeColor() {
    section.style.backgroundColor = 'red';
    section.style.color = 'white';
}

function changeColorBack() {
    section.style.backgroundColor = 'white';
    section.style.color = 'black';
}

xablau.addEventListener('mouseover', zoomIn)

function zoomIn(event) {
    xablau.style.fontSize = '70px';
    xablau.innerText = 'XABLAAAAAAAAAAAU, Lucas!';
}

// addEventListener - ele recebe 2 parâmetros, que são: evento e função. Essa função, quando for declarada como uma função própria, ela não pode receber parentesis no addEventListener; Essa função também pode ser uma função anônima, que é uma função que você só cria ali, pra resolver seu problema e não usa mais.

// Criando um botão;

let button = document.createElement('button');
button.innerText = 'Minhoca';

main.appendChild(button);

button.addEventListener('click', mudaCor);

function mudaCor() {
    let div1 = document.querySelector('#div1');
    if (div1.className !== 'xablau') {
        div1.className = 'xablau'; 
    } else {
        div1.className = 'tombrady';
    }
}