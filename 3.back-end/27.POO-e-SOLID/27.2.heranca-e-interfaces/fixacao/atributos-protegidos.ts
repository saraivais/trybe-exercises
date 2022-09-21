class Superclass2 {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  protected sayHello() {
    console.log('Hello, world!');
  }
}

class Subclass2 extends Superclass2 {
  constructor() {
    super();
  }

  public sayOla() {
    this.sayHello();
  }
}

const myFunc2 = (myclass:Subclass2) => {
  myclass.sayOla();
}

// const superClass2 = new Superclass();
const teste = new Subclass2();

// myFunc(superClass2);
myFunc2(teste);
