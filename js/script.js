// Income Function
function incomeCount() {
  const incomeInput = document.getElementById("incomeAmountInput");
  const incomeAmount = incomeInput.value;

  const incomeTotal = document.getElementById("totalIncome");
  incomeTotal.innerText = incomeAmount;

  //   // clear Input Fields
  //   incomeInput.value = "";

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

  //   // clear Input Fields
  //   foodExpenseInput.value = "";
  //   rentExpenseInput.value = "";
  //   clothExpenseInput.value = "";

  return parseFloat(totalExpense);
}

// Balance Function
function balanceAmount(value1, value2) {
  const balanceAmountTotal = value1 - value2;
  const totalBalances = document.getElementById("totalBalance");
  totalBalances.innerText = balanceAmountTotal;

  return parseFloat(balanceAmountTotal);
}

// Saving Function
function savingsCount(value3) {
  const savingInput = document.getElementById("savingsAmount");
  const savingTotalText = savingInput.value;
  const savingTotal = parseFloat(savingTotalText);

  const save = (value3 * savingTotal) / 100;

  const totalSaveAmount = document.getElementById("saveAmount");
  totalSaveAmount.innerText = save;

  //   // Clear Input Field
  //   savingInput.value = "";

  return parseFloat(save);
}

// Net Balance Function
function netBalance(value4, value5) {
  const netTotalBalance = value4 - value5;
  const remainingAmount = document.getElementById("netBalance");
  remainingAmount.innerText = netTotalBalance;
}

// Function Call
document
  .getElementById("calculationButton")
  .addEventListener("click", function () {
    var income = incomeCount();
    var expense = expenseCount();
    var balance = balanceAmount(income, expense);

    document
      .getElementById("savingCalculationButton")
      .addEventListener("click", function () {
        var savingBalance = savingsCount(income);
        netBalance(balance, savingBalance);
      });
  });
