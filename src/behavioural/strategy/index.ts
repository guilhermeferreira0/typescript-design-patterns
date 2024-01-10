import { DefaultDiscount } from './shopping-cart/default-discount';
import { ECommerceShoppingCart } from './shopping-cart/e-commerce-shopping-cart';
// import { NewDiscount } from './shopping-cart/new-discount';

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.add({ name: 'Produto 1', price: 50 });
shoppingCart.add({ name: 'Produto 2', price: 50 });
shoppingCart.add({ name: 'Produto 2', price: 50 });

shoppingCart.discount = new DefaultDiscount();
// shoppingCart.discount = new NewDiscount();

console.log(shoppingCart.getProducts());
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
