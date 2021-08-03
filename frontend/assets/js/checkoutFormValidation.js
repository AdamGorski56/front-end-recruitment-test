// -------------  Variables -----------------

// Input Handlers

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const postalCode = document.getElementById("postalCode");
const phone = document.getElementById("phone");
const creditCard = document.getElementById("creditCard");
const CVV = document.getElementById("CVV");
const expDate = document.getElementById("expDate");

// invalid input message containers

const firstNameInvalidMessage = document.querySelector(".first_name");
const lastNameInvalidMessage = document.querySelector(".last_name");
const emailInvalidMessage = document.querySelector(".email");
const postalCodeInvalidMessage = document.querySelector(".postalCode");
const phoneInvalidMessage = document.querySelector(".phone");
const creditCardInvalidMessage = document.querySelector(".creditCard");
const CVVInvalidMessage = document.querySelector(".CVV");
const expDateInvalidMessage = document.querySelector(".expDate");

// ------------------ Event Listeners -------------------

firstName.addEventListener("blur", firstNameValidation);
lastName.addEventListener("blur", lastNameValidation);
email.addEventListener("blur", emailValidation);
postalCode.addEventListener("blur", postalCodeValidation);
phone.addEventListener("blur", phoneValidation);
creditCard.addEventListener("blur", creditCardValidation);
CVV.addEventListener("blur", CVVValidation);
expDate.addEventListener("blur", expDateValidation);

// ---------------- functions -----------------------

function firstNameValidation() {
  console.log(":das");
  const regex = /^[a-zA-z]{2,10}$/;
  if (!regex.test(firstName.value)) {
    firstNameInvalidMessage.classList.add("is_invalid");
  } else {
    firstNameInvalidMessage.classList.remove("is_invalid");
  }
}
function lastNameValidation() {
  const regex = /^[a-zA-z]{2,15}$/;
  if (!regex.test(lastName.value)) {
    lastNameInvalidMessage.classList.add("is_invalid");
  } else {
    lastNameInvalidMessage.classList.remove("is_invalid");
  }
}
function emailValidation() {
  const regex = /^([\w\.\-])+[@]\w{1,10}[.]\w{1,5}([.]\w{1,5})?$/;
  if (!regex.test(email.value)) {
    emailInvalidMessage.classList.add("is_invalid");
  } else {
    emailInvalidMessage.classList.remove("is_invalid");
  }
}
function postalCodeValidation() {
  const regex = /^[0-9]{5}$/;
  if (!regex.test(postalCode.value)) {
    postalCodeInvalidMessage.classList.add("is_invalid");
  } else {
    postalCodeInvalidMessage.classList.remove("is_invalid");
  }
}
function phoneValidation() {
  const regex = /^[0-9]{10}$/;
  if (!regex.test(phone.value)) {
    phoneInvalidMessage.classList.add("is_invalid");
  } else {
    phoneInvalidMessage.classList.remove("is_invalid");
  }
}
function creditCardValidation() {
  const regex = /^[0-9]{16}$/;
  if (!regex.test(creditCard.value)) {
    creditCardInvalidMessage.classList.add("is_invalid");
  } else {
    creditCardInvalidMessage.classList.remove("is_invalid");
  }
}
function CVVValidation() {
  const regex = /^[0-9]{3}$/;
  if (!regex.test(CVV.value)) {
    CVVInvalidMessage.classList.add("is_invalid");
  } else {
    CVVInvalidMessage.classList.remove("is_invalid");
  }
}
function expDateValidation() {
  const regex = /^[0-9]{2}\/[0-9]{2}$/;
  if (!regex.test(expDate.value)) {
    expDateInvalidMessage.classList.add("is_invalid");
  } else {
    expDateInvalidMessage.classList.remove("is_invalid");
  }
}
