const personPrototype = {
  firstName: 'Guilherme',
  lastName: 'Seila',
  age: 30,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);

anotherPerson.firstName = 'joana';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
