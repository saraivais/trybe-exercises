const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 'Aanemarie' => [A, a, n, e, m, a, r, i, e] => Aaa;
// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra 'a' maiúscula ou minúscula.

function containsA(arr) {
  const matriz = arr.map((elemento) => elemento.split(''));
  return matriz.reduce(((acc, curr) => acc + curr.reduce((total, letra) => {
    if (letra === 'a' || letra === 'A') {
      return total + letra;
    }
    return total;
  })), '').length;
}

console.log(containsA(names));

// fazer com join e split~ arrayzão~ reduce