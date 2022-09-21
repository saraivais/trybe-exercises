class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(n: string, bd: Date) {
    this._name = n;
    this._birthDate = bd;
  }

  get name() {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length >= 3) {
      this._name = newName;
    }
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(newDate: Date) {
    this.validateBirthDate(newDate);
    this._birthDate = newDate;
  }

  private validateBirthDate(newDate: Date): void {
    if (newDate.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro');
    if (Person.getAge(newDate) > 120) throw new Error('A pessoa deve ter no máximo 120 anos')
  }
}

export default Person;
