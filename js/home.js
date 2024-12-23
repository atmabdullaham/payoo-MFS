/**
 * step-1: Add event listener and prevent reload after form submit
 */


document.getElementById("add-Money-con").addEventListener("click", function (event) {
 event.preventDefault();
 const money = parseFloat(document.getElementById("amount").value);

 const pin = document.getElementById('account-pin').value;
 console.log(money, pin)

 if (pin === "123") {
  const balance = parseFloat(document.getElementById("account-balance").innerText);
  const newBalance = balance + money;
  document.getElementById("account-balance").innerText = newBalance;
  console.log(newBalance)
 } else {
  console.log("Wrong Pin")
 }

})

// 
document.getElementById('add-money').addEventListener("click", function () {
 document.getElementById("form-container").classList.remove("hidden")
 document.getElementById("add-Money-con").classList.remove("hidden")
 document.getElementById("cashout-con").classList.add("hidden")
})
//
document.getElementById('cash-out').addEventListener("click", function () {
 document.getElementById("form-container").classList.remove("hidden")
 document.getElementById("cashout-con").classList.remove("hidden")
 document.getElementById("add-Money-con").classList.add("hidden")
})


// Cash out confirmation button

document.getElementById("cashout-con").addEventListener("click", function (event) {
 event.preventDefault();
 const money = parseFloat(document.getElementById("amount").value);

 const pin = document.getElementById('account-pin').value;


 if (pin === "123") {
  const balance = parseFloat(document.getElementById("account-balance").innerText);
  const newBalance = balance - money;
  document.getElementById("account-balance").innerText = newBalance;

 } else {
  console.log("Wrong Pin")
 }

})