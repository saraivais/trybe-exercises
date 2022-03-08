const searchEmployee = require('./bonus');

describe('SearchEmployee function:', () => {

  it('Is indeed a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Returns the key:value entry corresponding to the key and ID passed', () => {
    expect(searchEmployee('8579-6', 'lastName')).toBe('ID: 8579-6, lastName: Gates');
  });

  it('Returns the key:value entry corresponding to the key and ID passed', () => {
    expect(searchEmployee('5569-4', 'lastName')).toBe('ID: 5569-4, lastName: Jobs');
  });

  it('Returns the key:value entry corresponding to the key and ID passed', () => {
    expect(searchEmployee('4456-4', 'specialities')).toBe('ID: 4456-4, specialities: Context API RTL Bootstrap');
  });

  it('Returns the key:value entry corresponding to the key and ID passed', () => {
    expect(searchEmployee('1256-4', 'lastName')).toBe('ID: 1256-4, lastName: Bezos');
  });

  it('Returns the key:value entry corresponding to the key and ID passed', () => {
    expect(searchEmployee('9852-2-2', 'firstName')).toBe('ID: 9852-2-2, firstName: Jeff');
  });

  it('Returns an error if the requested detail does not exist', () => {
    expect(() => {searchEmployee('9852-2-2', 'address')}).toThrow();
  });
  
  it('Returns the specific error if the detail does not exist', () => {
    expect(() => {searchEmployee('5569-4', 'skill')}).toThrow('Informação indisponível');
  });

});
