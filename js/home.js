/**
 * step-1: Add event listener and prevent reload after form submit
 */


document.getElementById("add-Money-con").addEventListener("click", function (event) {
 event.preventDefault();
 const addMoney = parseFloat(document.getElementById("amount").value);

 const pin = document.getElementById('account-pin').value;
 console.log(addMoney, pin)

 if (pin === "123") {
  const balance = parseFloat(document.getElementById("account-balance").innerText);
  const newBalance = balance + addMoney;
  document.getElementById("account-balance").innerText = newBalance;
  console.log(newBalance)
 } else {
  console.log("Wrong Pin")
 }

})