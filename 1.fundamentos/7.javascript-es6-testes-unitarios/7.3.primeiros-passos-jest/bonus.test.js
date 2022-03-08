const searchEmployee = require('./bonus');

describe('SearchEmployee function:', () => {

  it('Is indeed a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
});