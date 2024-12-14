function getBudget(e) {
  e.preventDefault;
  let budget = prompt("enter the budjet");

  if (budget !== "" && !isNaN(budget)) {
    document.querySelector("#total").textContent = budget;
    document.querySelector("#left").textContent = budget;
  } else {
    while (budget == "" || isNaN(budget)) {
      budget = prompt("enter the budjet (as number)");
      if (budget !== "" && !isNaN(budget)) {
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
  const expense = document.querySelector("#expense");
  const amount = document.querySelector("#amount");
  const ul = document.querySelector('.list-group');
  const li = document.createElement('li');
  const span = document.createElement('span');
  const span2 = document.createElement('span');
  span.textContent = expense.value;
  span2.textContent = amount.value;
  li.appendChild(span);
  li.appendChild(span2);
  ul.appendChild(li);
  expense.value = '';
  amount.value = '';
}
