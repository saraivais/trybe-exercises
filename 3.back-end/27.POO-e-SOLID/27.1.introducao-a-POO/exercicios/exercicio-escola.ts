class PessoaEstudante {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[]; //[number, number, number, number]
  private _notasTrabalho: number[]; //[number, number]

  constructor(m: string, n: string, np: number[], nt: number[]) {
    this._matricula = m;
    this._nome = n;
    this._notasProva = np;
    this._notasTrabalho = nt;
  }

  somaNotas() {
    const soma = this._notasProva.reduce((acc, curr) => acc + curr, 0) + this._notasTrabalho.reduce((acc, curr) => acc + curr, 0);
    return soma;
  }

  mediaNotas() {
    const media = this._notasProva.reduce((acc, curr) => acc + curr, 0) + this._notasTrabalho.reduce((acc, curr) => acc + curr, 0);
    return media/(this._notasProva.length + this._notasTrabalho.length);
  }
}

const personOne = new PessoaEstudante('202001011', 'Maria da Silva', [25, 20, 23, 23], [45, 45]);

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.somaNotas());
console.log('Média de todas as notas: ', personOne.mediaNotas());