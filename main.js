const counterPlusButton = document.getElementById("countUp");
const counterMinusButton = document.getElementById("count-down");
const counterResetButton = document.getElementById("count-reset");
const count = document.getElementById("count-value");
let counter = 0;
counterPlusButton.addEventListener("click", () => {
  counter += 1;
  count.textContent = counter;
});
counterMinusButton.addEventListener("click", () => {
  counter -= 1;
  count.textContent = counter;
});
counterResetButton.addEventListener("click", () => {
  counter = 0;
  count.textContent = counter;
});
