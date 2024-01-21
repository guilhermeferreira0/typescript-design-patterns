import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');
console.log(dataStructure);

const [a, b] = dataStructure;

console.log('Roubados', a, b);

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}

dataStructure.changeIterator(new MyReverseIterator(dataStructure));
console.log('Não tenho valor');
for (const data of dataStructure) {
  console.log(data);
}
