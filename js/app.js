//function to get the budget from input
function getBudget(e) {
  e.preventDefault;
  let budget = prompt("enter the budjet");
  //if the input is not empty and is a number, get the data and add to the budget list
  if (budget !== "" && !isNaN(budget)) {
    document.querySelector("#total").textContent = budget;
    document.querySelector("#left").textContent = budget;
  } else {
    //when the input is empty or is not a number, the prompt will be repeating
    while (budget == "" || isNaN(budget)) {
      budget = prompt("enter the budjet (as number)");
      //then as soon as the input is not empty and is a number, get the data and add to the budget list
      if (budget !== "" && !isNaN(budget)) {
        document.querySelector("#total").textContent = budget;
        document.querySelector("#left").textContent = budget;
      }
    }
  }
}
//function happens when window loads
window.onload = getBudget;
const btn = document.querySelector(".btn-primary");
btn.addEventListener("click", getExpense);
//function to add the data to expense list
function getExpense(e) {
  e.preventDefault();
  const expense = document.querySelector("#expense");
  const amount = document.querySelector("#amount");
  //if the expense input or amount input is empty, tell the user to fill them up
  if (expense.value == "" || amount.value == "") {
    alert("Please Fill All Fields");
  }
  //if not, make the expense list
  else {
    const ul = document.querySelector(".list-group");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const span2 = document.createElement("span");
    span.textContent = expense.value;
    span2.textContent = amount.value;
    li.appendChild(span);
    li.appendChild(span2);
    ul.appendChild(li);
    //afterwards the inputs become empty again
    expense.value = "";
    amount.value = "";
  }
}
