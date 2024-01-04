export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(
    public street: string,
    public number: number,
  ) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const person1 = new Person('Julia', 50);
const person2 = person1.clone();

// Quando fazer uma alteração em um objeto, ele não altera o seu clone;

const address1 = new Address('av brasil', 15);
person1.addAddress(address1);

const address2 = address1.clone();
person2.addAddress(address2);

person1.addresses[0].street = 'blablacla';

person2.name = 'joana';
console.log(person2);
console.log(person1.addresses);

console.log(person2.addresses);
