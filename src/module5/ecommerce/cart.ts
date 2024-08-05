import { Product } from './product';

export class Cart {
  private items: Product[] = [];

  addItem(product: Product): void {
    this.items.push(product);
  }

  removeItem(productId: number): void {
    this.items = this.items.filter(item => item.id !== productId);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}