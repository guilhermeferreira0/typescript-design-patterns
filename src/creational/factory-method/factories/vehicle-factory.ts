import { Vehicle } from '../vehicle/vehicle';

export abstract class VehicleFactory {
  // factory method
  abstract getVehicle(vehicleName: string): Vehicle;

  pickUp(custumerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);
    car.pickUp(custumerName);
    return car;
  }
}
