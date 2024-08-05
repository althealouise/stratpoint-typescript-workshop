import { Product, formatPrice } from './product';
import { Cart } from './cart';
import { Checkout } from './checkout';

const product1: Product = { id: 1, name: 'T-shirt', price: 19.99 };
const product2: Product = { id: 2, name: 'Jeans', price: 49.99 };

const cart = new Cart();
cart.addItem(product1);
cart.addItem(product2);

console.log(`Cart Total: ${formatPrice(cart.getTotal())}`);

const checkout = new Checkout(cart);
checkout.processOrder('altheacruz@example.com', '9235678930');