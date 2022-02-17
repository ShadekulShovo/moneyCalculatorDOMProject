// Income Function
function incomeCount() {
  const incomeInput = document.getElementById("incomeAmountInput");
  const incomeAmount = incomeInput.value;

  const incomeTotal = document.getElementById("totalIncome");
  incomeTotal.innerText = incomeAmount;

  // clear Input Fields
  incomeInput.value = "";

  return parseFloat(incomeAmount);
}

// Expense Function
function expenseCount() {
  // Food
  const foodExpenseInput = document.getElementById("foodExpenseAmountInput");
  const foodExpenseAmount = foodExpenseInput.value;

  // Rent
  const rentExpenseInput = document.getElementById("rentExpenseAmountInput");
  const rentExpenseAmount = rentExpenseInput.value;

  // Cloth
  const clothExpenseInput = document.getElementById("clothExpenseAmountInput");
  const clothExpenseAmount = clothExpenseInput.value;

  // totalExpense
  const totalExpense =
    parseFloat(foodExpenseAmount) +
    parseFloat(rentExpenseAmount) +
    parseFloat(clothExpenseAmount);
  const totalExpenses = document.getElementById("totalExpense");
  totalExpenses.innerText = totalExpense;

  // clear Input Fields
  foodExpenseInput.value = "";
  rentExpenseInput.value = "";
  clothExpenseInput.value = "";

  return parseFloat(totalExpense);
}

// Balance Function
function balanceAmount(value1, value2) {
  const balanceAmountTotal = value1 - value2;
  const totalBalances = document.getElementById("totalBalance");
  totalBalances.innerText = balanceAmountTotal;

  return balanceAmountTotal;
}

// Function Call
document
  .getElementById("calculationButton")
  .addEventListener("click", function () {
    var income = incomeCount();
    var expense = expenseCount();
    balanceAmount(income, expense);
  });
