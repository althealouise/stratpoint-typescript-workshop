export interface Product {
  id: number;
  name: string;
  price: number;
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}