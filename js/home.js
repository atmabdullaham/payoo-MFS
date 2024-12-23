/**
 * step-1: Add event listener and prevent reload after form submit
 */

// reuseable function

function getInputValue(id) {
 const value = document.getElementById(id).value
 const valueNumber = parseFloat(value);
 return valueNumber
}
function getInnerText(id) {
 const text = document.getElementById(id).innerText;
 const textNumber = parseFloat(text);
 return textNumber
}


document.getElementById("add-Money-con").addEventListener("click", function (event) {
 event.preventDefault();
 //......

 const money = getInputValue("amount");
 const pin = getInputValue('account-pin');

 if (pin == "123") {
  const balance = getInnerText("account-balance");
  const newBalance = balance + money;
  document.getElementById("account-balance").innerText = newBalance;
 } else {
  alert("Wrong Pin")
 }

})

//.......
// reuseable functions
//1
function removeClass(id, cl) {
 return document.getElementById(id).classList.remove(cl);
}
//2
function addClass(id, cl) {
 return document.getElementById(id).classList.add(cl);
}
//.......
document.getElementById('add-money').addEventListener("click", function () {
 removeClass("form-container", "hidden")
 removeClass("add-Money-con", "hidden")
 addClass("cashout-con", "hidden")
})
//
document.getElementById('cash-out').addEventListener("click", function () {
 removeClass("form-container", "hidden")
 removeClass("cashout-con", "hidden")
 addClass("add-Money-con", "hidden")
})


// Cash out confirmation button

document.getElementById("cashout-con").addEventListener("click", function (event) {
 event.preventDefault();
 const money = getInputValue("amount")
 const pin = getInputValue('account-pin')


 if (pin == "123") {
  const balance = getInnerText("account-balance")
  const newBalance = balance - money;
  document.getElementById("account-balance").innerText = newBalance;

 } else {
  alert("Wrong Pin")
 }
})