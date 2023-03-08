let bill = document.querySelector(".input1");
let person = document.querySelector(".input2");
let custom = document.querySelector(".inppro");
let amount = document.querySelector("h3");
let total = document.querySelector("h4");
let reset = document.querySelector(".reset");
let percent = document.querySelectorAll("button");
let warning = document.querySelector("p");

let billInput = 0;
let customInput = 0;
let personInput = 0;

function calculateTip() {
  if (billInput && personInput) {
    let tipPercent = 0;
    if (customInput) {
      tipPercent = customInput;
    } else {
      tipPercent = parseFloat(amount.innerHTML);
    }
    let amountValue = (billInput * (tipPercent / 100)) / personInput;
    let totalValue = billInput / personInput + amountValue;
    amount.innerHTML = "$" + amountValue.toFixed(2);
    total.innerHTML = "$" + totalValue.toFixed(2);
  }
}

let percentClicked = false;
bill.addEventListener("input", function () {
  billInput = bill.value;
  if (percentClicked || custom.value) {
    calculateTip();
  }
});

custom.addEventListener("input", function () {
  customInput = custom.value;
  calculateTip();
});

person.addEventListener("input", function () {
  personInput = person.value;
  if (percentClicked || custom.value) {
    calculateTip();
  }
  if (person.value == 0) {
    warning.style.display = "block";
    person.style.border = "2px solid rgb(238, 8, 8, 1)";
    amount.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
  } else {
    warning.style.display = "none";
    person.style.border = "2px solid rgb(238, 8, 8, 0)";
  }
});

let some;
percent.forEach((x) => {
  x.addEventListener("click", function () {
    some = x.innerHTML;
    amount.innerHTML = x.innerHTML;
    total.innerHTML = x.innerHTML;
    custom.value = "";
    customInput = 0;
    calculateTip();
    x.className = "style";
    if (bill.value == 0 || person.value == 0) {
      warning.style.display = "block";
      person.style.border = "2px solid rgb(238, 8, 8, 1)";
      amount.innerHTML = "$0.00";
      total.innerHTML = "$0.00";
    } else {
      warning.style.display = "none";
      person.style.border = "2px solid rgb(238, 8, 8, 0)";
    }
    percentClicked = true;

    percent.forEach((y) => {
      if (y.innerHTML !== some) {
        y.className = "button";
      }
    });
  });
});

reset.addEventListener("click", function () {
  billInput = 0;
  customInput = 0;
  personInput = 0;
  bill.value = "";
  custom.value = "";
  person.value = "";
  amount.innerHTML = "$0.00";
  total.innerHTML = "$0.00";
  percent.forEach((x) => {
    x.className = "button";
  });
  warning.style.display = "none";
  person.style.border = "2px solid rgb(238, 8, 8, 0)";
  percentClicked = false;
});
