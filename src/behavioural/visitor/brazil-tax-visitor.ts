import { AlcohilicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { TaxVisitorProtocol } from './tax-visitor-protocol';

export class BrazilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.price + food.price * 0.05;
  }

  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.price + cigarette.price * 1.5;
  }

  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcohilicDrink): number {
    return alcoholicDrink.price + alcoholicDrink.price * 0.5;
  }
}
