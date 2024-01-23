import { AlcohilicDrink } from './alcoholic-drink';
import { BrazilTaxVisitor } from './brazil-tax-visitor';
import { Cigarette } from './cigarette';
import { Food } from './food';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcohilicDrink = new AlcohilicDrink(5);

const brazilTaxVisitor = new BrazilTaxVisitor();

const cart = [food, cigarette, alcohilicDrink];
const total = cart.reduce((sum, item) => item.price + sum, 0);
const totalWithTaxes = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
  0,
);
console.log(total);
console.log(totalWithTaxes);
