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

percent.forEach((x) => {
  x.addEventListener("click", function () {
    if (person.value == 0) {
      warning.style.display = "block";
    }
  });
});

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

bill.addEventListener("input", function () {
  billInput = bill.value;
  calculateTip();
});

custom.addEventListener("input", function () {
  customInput = custom.value;
  calculateTip();
});

person.addEventListener("input", function () {
  personInput = person.value;
  calculateTip();
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
});
