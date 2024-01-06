import { ProductCustomizationDecorator } from './product-customization-decorator';
import { ProductStampDecorator } from './product-stamp-decorator';
import { TShirt } from './t-shirt';

const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const tShirtStampFrontAndBack = new ProductStampDecorator(tShirtWithStamp);
const customizedTshirt = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(
  tShirtStampFrontAndBack.getPrice(),
  tShirtStampFrontAndBack.getName(),
);

console.log(customizedTshirt.getName(), customizedTshirt.getPrice());
