// Component
export abstract class ProductComponent {
  abstract getPrice(): number;

  /* eslint-disable @typescript-eslint/no-unused-vars */
  // add(product: ProductComponent): void {}
  // remove(product: ProductComponent): void {}
}

// Leaf
export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((item) => this.children.push(item));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== 1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

// Client Code
const camiseta = new ProductLeaf('Camiseta', 40);
const bicicleta = new ProductLeaf('bicicleta', 140);
const caderno = new ProductLeaf('Caderno', 80_000);
const productBox = new ProductComposite();
productBox.add(camiseta, bicicleta, caderno);

const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('Kindle', 300);
const anotherProdutBox = new ProductComposite();
anotherProdutBox.add(tablet, kindle);
productBox.add(anotherProdutBox);
console.log(productBox);
console.log(productBox.getPrice());
