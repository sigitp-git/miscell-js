const account = {
  name: "Mici Bici",
  expenses: [],
  addExpense: function (desc, amt) {
    this.expenses.push({ description: desc, amount: amt })
    return console.log(this.expenses)
  },
  getAccountSummary: function () {
    const amtsum = this.expenses.reduce((acc, cur) => ({
      amount: acc.amount + cur.amount,
    }))
    console.log(amtsum.amount)
  },
}

account.addExpense("Rent", 950)
account.addExpense("Coffee", 10)
account.addExpense("Coffee", 10)
account.addExpense("Keyboard", 200)
account.addExpense("Mouse", 100)
account.getAccountSummary()
console.log(account)
