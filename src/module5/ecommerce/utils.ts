export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  export function isValidPhoneNumber(phone: string): boolean {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
  
  export function formatDate(date: Date): string {
    return date.toLocaleDateString();
  }
  
  export function formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
  }