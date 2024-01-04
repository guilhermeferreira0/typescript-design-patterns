export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(
    public street: string,
    public number: number,
  ) {}
}

const person1 = new Person('Julia', 50);
const person2 = person1.clone();

const address1 = new Address('av brasil', 15);
person2.addAddress(address1);

person2.name = 'joana';
console.log(person2);
console.log(person2.addresses);
