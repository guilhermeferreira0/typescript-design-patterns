import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Maria', age: 30 });
myDatabaseClassic.add({ name: 'Carlos', age: 50 });
myDatabaseClassic.add({ name: 'Julio', age: 80 });
myDatabaseClassic.remove(1);
myDatabaseClassic.show();

export { myDatabaseClassic };
