import { Mediator } from './mediator';
import { SellerProduct } from './seller-product';

export class Seller {
  private products: SellerProduct[] = [];
  private mediator?: Mediator;

  viewProducts(): void {
    if (!this.mediator) return;
    this.mediator.showProducts();
  }

  showProducts(): void {
    this.products.forEach((prod) => console.log(prod));
  }

  addProduct(...products: SellerProduct[]): void {
    products.forEach((prod) => this.products.push(prod));
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  sell(id: string): SellerProduct | void {
    const productIndex = this.products.findIndex((prod) => prod.id === id);

    if (productIndex === -1) return;
    const product = this.products.splice(productIndex, 1);
    return product[0];
  }

  buy(id: string): void {
    if (!this.mediator) return;
    this.mediator.buy(id);
  }
}
