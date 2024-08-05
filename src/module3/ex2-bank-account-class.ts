class BankAccount {
    // Private balance property
    private _balance: number;
  
    constructor() {
      this._balance = 0; // Initialize the balance to 0
    }
  
    // Method to deposit money
    deposit(amount: number): void {
      if (amount <= 0) {
        console.log("Deposit amount must be positive.");
        return;
      }
      this._balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this._balance}`);
    }
  
    // Method to withdraw money
    withdraw(amount: number): void {
      if (amount <= 0) {
        console.log("Withdrawal amount must be positive.");
        return;
      }
      if (amount > this._balance) {
        console.log("Insufficient balance. Withdrawal denied.");
        return;
      }
      this._balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this._balance}`);
    }
  
    // Method to get the current balance
    getBalance(): number {
      return this._balance;
    }
  }
  
  // Example usage
  let account = new BankAccount();
  account.deposit(1000);
  account.withdraw(500);
  console.log(account.getBalance()); // 500
  // account.withdraw(1000); // This would throw an error
  