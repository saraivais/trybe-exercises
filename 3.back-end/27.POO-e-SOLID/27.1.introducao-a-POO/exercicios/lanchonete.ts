class Cliente {
  public nome: string;

  constructor (n: string) {
    this.nome = n;
  }
}

class Pedido {
  private _cliente: string;
  private _itens: Item[];
  private _formaDePagamento: string;
  private _percentualDesconto: number;

  constructor(c: Cliente, i: Item[], fp: string, d: number) {
    this._cliente = c.nome;
    this._itens = i;
    this._formaDePagamento = fp;
    this._percentualDesconto = d;
  }

  // total do pedido
  totalPedido() {
    const total = this._itens.reduce((acc, curr) => acc + curr.preco, 0);
    return total;
  }

  // total com desconto
  totalComDesconto() {
    return this.totalPedido() * (1 - this._percentualDesconto);
  } 

}

class Item {
  private _nome: string;
  public preco: number;

  constructor(n: string, p: number) {
    this._nome = n;
    this.preco = p;
  }
}

const client = new Cliente('João');

const sandwich = new Item('Sanduíche Natural', 5.00);
const juice = new Item('Suco de Abacaxi', 5.00);
const dessert = new Item('Gelatina de Uva', 2.50);

const order = new Pedido(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log(order.totalPedido());
console.log(order.totalComDesconto());

