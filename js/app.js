function getBudget(e) {
  e.preventDefault;
  let budget = prompt("enter the budjet");

  if (budget !== "") {
    document.querySelector("#total").textContent = budget;
    document.querySelector("#left").textContent = budget;
  } else {
    while (budget == "") {
      budget = prompt("enter the budjet");
      if (budget !== "") {
        document.querySelector("#total").textContent = budget;
        document.querySelector("#left").textContent = budget;
      }
    }
  }
}
window.onload = getBudget;
const btn = document.querySelector(".btn-primary");
btn.addEventListener("click", getExpense);
function getExpense(e) {
  e.preventDefault();
  const expense = document.querySelector("#expense").value;
  const amount = document.querySelector("#amount").value;
}
