class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string[], connectedTo: string) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    this._connectedTo = connectedTo;
  }

  turnOn() {
    console.log('Inicializados no constructor');
    console.log('brand', this._brand);
    console.log('size', this._size);
    console.log('resolution', this._resolution);
    console.log('connections', this._connections);
    console.log('connectedTo', this._connectedTo);
  }

  get connectedTo() {
    return this._connectedTo;
  }
  
  set connectedTo(newValue: string) {
    if (this._connections.includes(newValue)) {
      this._connectedTo = newValue;
    } else {
      console.log('Sorry, connection unavailable');
    }
  }
}

const myTv = new Tv('Philco', 24, '1920x780', ['HDMI', 'VGA'], 'HDMI');

myTv.turnOn();
myTv.connectedTo = 'IDK';
console.log(myTv.connectedTo);
myTv.connectedTo = 'VGA';
console.log(myTv.connectedTo);
