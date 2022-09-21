import Person from "./exercicio1";

class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(n: string, bd: Date) {
    super(n, bd);
    this.enrollment = this.generateEnrollment();
    this._examsGrades = [];
    this._worksGrades = [];
  }

  get enrollment() {
    return this._enrollment;
  }

  set enrollment(newValue: string) {
    if (newValue.length < 16) throw new Error('Matrícula deve possuir no mínimo 16 caracteres');
    this._enrollment = newValue;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(newGrade: number[]) {
    if (newGrade.length <= 4) {
      this._examsGrades = [...newGrade];
    }
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(newGrade: number[]) {
    if (newGrade.length <= 2) {
      this._worksGrades = [...newGrade];
    }
  }

}

export default Student;
