import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'luiz', 20, 'Av Brasil', 'SP');
deliveryContext(factory, 'Helena', 20, 'Av Brasil', 'SP');
deliveryContext(factory, 'Kailany', 20, 'Av Brasil', 'SP');
deliveryContext(factory, 'Eliana', 2, 'Rua A', 'BH');

console.log();
console.log(factory.getLocations());
