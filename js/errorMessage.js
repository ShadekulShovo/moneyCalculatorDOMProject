function errorMessage() {
  var error = document.getElementById("error");
  if (isNaN(document.getElementById("incomeAmountInput").value)) {
    error.innerHTML =
      "<span style='color: red;'>" + "Enter a valid number</span>";
  } else {
    error.innerHTML = "";
  }
}

// Error1
function errorMessage1() {
  var error1 = document.getElementById("error1");
  if (isNaN(document.getElementById("foodExpenseAmountInput").value)) {
    error1.innerHTML =
      "<span style='color: red;'>" + "Enter a valid number</span>";
  } else {
    error1.innerHTML = "";
  }
}

// Error2
function errorMessage2() {
  var error1 = document.getElementById("error2");
  if (isNaN(document.getElementById("rentExpenseAmountInput").value)) {
    error2.innerHTML =
      "<span style='color: red;'>" + "Enter a valid number</span>";
  } else {
    error2.innerHTML = "";
  }
}

//   Error3
function errorMessage3() {
  var error3 = document.getElementById("error3");
  if (isNaN(document.getElementById("clothExpenseAmountInput").value)) {
    error3.innerHTML =
      "<span style='color: red;'>" + "Enter a valid number</span>";
  } else {
    error3.innerHTML = "";
  }
}

//   Error4
function errorMessage4() {
  var error4 = document.getElementById("error4");
  if (isNaN(document.getElementById("savingsAmount").value)) {
    error4.innerHTML =
      "<span style='color: red;'>" + "Enter a valid number</span>";
  } else {
    error4.innerHTML = "";
  }
}

document
  .getElementById("calculationButton")
  .addEventListener("click", function () {
    errorMessage();
    errorMessage1();
    errorMessage2();
    errorMessage3();

    document
      .getElementById("savingCalculationButton")
      .addEventListener("click", function () {
        errorMessage4();
      });
  });
