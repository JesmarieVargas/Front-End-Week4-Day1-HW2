class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    console.log(`Account Number.: ${accountNumber}`);
    console.log(`Balance: ${balance}`);    
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount}`);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawed: ${amount}`);
    } 
    else 
    {
      console.log(`Want to withdraw: ${amount}`);
      console.log('Sorry, unable to complete request. You are trying to take out more than what is in the account.');
    }
  }
  displayBalance() {
    console.log(`Account Balance: ${this.balance}`);
  }
}

const account = new BankAccount(898767854, 500000);
account.deposit(6500);
account.withdraw(250);
account.displayBalance();
account.withdraw(600000);
account.displayBalance();

