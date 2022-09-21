class Superclass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello() {
    console.log('Hello, world!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (mySuperClass:Superclass) => {
  if (mySuperClass.isSuper) {
    console.log('Super!');
  } else {
    console.log('Sub!');
    
  }
  mySuperClass.sayHello();
}

const superClass1 = new Superclass();
const subClass1 = new Subclass();

myFunc(superClass1);
myFunc(subClass1);
