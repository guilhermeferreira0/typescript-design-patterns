import { EnterpriseCreateVehicleFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCreateVehicleFactory } from './factories/individual-customer-vehicle-factory copy';

const enterpriseFactory = new EnterpriseCreateVehicleFactory();
const individualFactory = new IndividualCreateVehicleFactory();

const car1 = enterpriseFactory.createVehicle('Fusca', 'João');
const car2 = individualFactory.createVehicle('Celta', 'Helena');

car1.pickUp();
car2.pickUp();
