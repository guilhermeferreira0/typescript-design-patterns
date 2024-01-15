// import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
const seller2 = new Seller();

seller1.addProduct({ id: '1', name: 'camiseta', price: 49.9 });
seller1.addProduct({ id: '2', name: 'caneta', price: 59.9 });

seller2.addProduct({ id: '3', name: 'Lapis', price: 49000.9 });
seller2.addProduct({ id: '4', name: 'carro', price: 1.9 });

mediator.addSeller(seller1, seller2);

// const buyer = new Buyer(mediator);
// buyer.viewProducts();
// buyer.buy('1');
// buyer.buy('3');
// buyer.viewProducts();

seller2.viewProducts();
seller2.buy('2');
seller2.buy('4');
seller2.viewProducts();
