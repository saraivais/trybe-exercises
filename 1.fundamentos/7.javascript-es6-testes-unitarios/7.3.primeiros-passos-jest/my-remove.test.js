const myRemove = require('./my-remove');

/*
2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

describe('myRemove function:', () => {

  it('Removes one specific item', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  });

  it('Actually removes something', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
  });
  
  it('Does not do anything when it does not have to', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
  });

});