import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

// Padrão composite;
const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

const vegan = new VeganDishBuilder();
const veganMeal = vegan.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());
