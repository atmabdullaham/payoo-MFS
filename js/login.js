
// form submit reloading the page

document.getElementById('login-button').addEventListener("click", function (event) {
 event.preventDefault()

 //step: 3 Get the phone number
 const number = document.getElementById("number").value
 console.log(number)
 const pin = document.getElementById("pin").value
 console.log(pin)

 // Step-4: validate number and pin

 if (number === "018" && pin === "123") {
  window.location.href = '/home.html'
 } else {
  alert("Wrong Number or Pin")
 }





})
