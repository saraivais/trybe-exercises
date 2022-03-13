// Ao chamar a função doingThings:
const doingThings = (func) => console.log(func());;


// Acordando!!
const wakeUp = () => 'Acordando!!';
doingThings(wakeUp);

// Bora tomar café!!
const tomarCafe = () => 'Bora tomar café!!';
doingThings(tomarCafe);

// Partiu dormir!!
const dormir = () => 'Partiu dormir!!';
doingThings(dormir);

/*
1 - Crie uma função que retorne a string 'Acordando!!' ;
2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
*/