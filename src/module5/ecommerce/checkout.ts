import { Cart } from './cart';
import { isValidEmail, isValidPhoneNumber, formatDate, formatCurrency } from './utils';

export class Checkout {
  constructor(private cart: Cart) {}

  processOrder(email: string, phone: string): void {
    if (!isValidEmail(email)) {
      throw new Error('Invalid email address');
    }

    if (!isValidPhoneNumber(phone)) {
      throw new Error('Invalid phone number');
    }

    const total = this.cart.getTotal();
    const formattedTotal = formatCurrency(total);
    const orderDate = formatDate(new Date());

    console.log(`Order processed on ${orderDate} for ${formattedTotal}`);
  }
}