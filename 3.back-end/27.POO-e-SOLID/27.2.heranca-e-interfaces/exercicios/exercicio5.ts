// `Class`: Teacher
// `Extends`: Person
// `Implements`: Employee
// `Attributes`:
//     - subject: a disciplina lecionada pela pessoa professora
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome, data de nascimento, salário
//       e a disciplina
// `Validations`:
//     - O registro deve possuir no mínimo 16 caracteres
//     - O salário não pode ser negativo.
//     - A data de admissão não pode ser no futuro

import Person from "./exercicio1";
import Employee from "./exercicio3";
import Subject from "./exercicio4";
import Student from "./exercicio2";

class Teacher extends Person implements Employee {
  private _registration = String();
  private _admissionDate: Date;
  private _salary = Number();

  constructor(n: string, bd: Date, s: number, d: Subject) {
    super(n, bd);
    this.registration = this.generateRegistration();
    this._admissionDate = this.generateAdmissionDate();
    this.salary = s;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(newValue: string) {
    if (newValue.length < 16) throw new Error('mt pequeno');
    this._registration = newValue;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  get admissionDate():Date {
    return this._admissionDate;
  }

  set admissionDate(newDate: Date) {
    if (newDate.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro');
    this._admissionDate = newDate;
  }
  generateAdmissionDate(): Date {
    return new Date();
  }

  get salary() {
    return this._salary;
  }

  set salary(newValue: number) {
    if (newValue > 0) {
      this._salary = newValue;
    }
  }

}

export default Teacher;
