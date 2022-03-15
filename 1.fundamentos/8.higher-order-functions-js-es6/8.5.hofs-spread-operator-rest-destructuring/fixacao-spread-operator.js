// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Melão', 'Melancia', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Iogurte', 'Kiwi', 'Blueberry'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));