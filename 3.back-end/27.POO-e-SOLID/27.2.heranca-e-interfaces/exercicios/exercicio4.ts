// `Class`: Subject
// `Attributes`:
//     - name: nome da disciplina
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome
// `Validations`:
//     - O nome tem que possuir no mínimo 3 caracteres

class Subject {
  private _name = String();

  constructor(n: string) {
    this.name = n;
  }

  get name() {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length > 3) {
      this._name = newName;
    }
  }
}

export default Subject;
