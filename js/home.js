/**
 * step-1: Add event listener and prevent reload after form submit
 */


document.getElementById("add-Money-con").addEventListener("click", function (event) {
 event.preventDefault();
 const addMoney = document.getElementById("amount").value;

 const pin = document.getElementById('account-pin').value;
 console.log(addMoney, pin)

})