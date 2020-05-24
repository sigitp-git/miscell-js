const account = {
  name: "Mici Bici",
  expenses: [],
  addExpense: function (desc, amt) {
    this.expenses.push({ ex_description: desc, amount: amt })
    return console.log(this.expenses)
  },
  getExpenseSummary: function () {
    const expSum = this.expenses.reduce((acc, cur) => ({
      amount: acc.amount + cur.amount,
    }))
    return expSum.amount
  },
  income: [],
  addIncome: function (desc, amt) {
    this.income.push({ in_description: desc, amount: amt })
    return console.log(this.income)
  },
  getIncomeSummary: function () {
    const incSum = this.income.reduce((acc, cur) => ({
      amount: acc.amount + cur.amount,
    }))
    return incSum.amount
  },
}

account.addExpense("Rent", 950)
account.addExpense("Coffee", 10)
account.addExpense("Coffee", 10)
account.addExpense("Keyboard", 200)
account.addExpense("Mouse", 100)

account.addIncome("Coding", 1500)
account.addIncome("Cloud", 10000)

console.log(
  `${
    account.name
  } has $${account.getIncomeSummary()} income and $${account.getExpenseSummary()} expenses. Total account now $${
    account.getIncomeSummary() - account.getExpenseSummary()
  } available.`
)
