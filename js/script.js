// name field operations
let nameField = document.getElementById("name");
nameField.focus();

//job role operations
let jobRole = document.getElementById("title");
let otherJobRole = document.getElementById("other-job-role");

otherJobRole.style.display = "none";

jobRole.addEventListener("change", (e) => {
    if (e.target.value === "other") {
        otherJobRole.style.display = "block";
    } else {
        otherJobRole.style.display = "none";
    }
});

//tshirt operations
let shirtDesign = document.querySelector('#design');
let shirtColor = document.querySelector('#color');
let colorDiv = document.getElementById("shirt-colors")
let colorOptions = shirtColor.children;

shirtColor.disabled = true;

shirtDesign.addEventListener("change", (e) => {
    
    shirtColor.disabled = false;
    
    if (e.target.value === 'js puns') {
        for (let i = 0; i < colorOptions.length; i++) {
                    if (colorOptions[i].getAttribute('data-theme') === 'js puns') {
                    colorOptions[i].style.display = 'initial';
            } else {
                colorOptions[i].style.display = 'none';
            }
        }
    } else if (e.target.value === 'heart js') {
        for (let i = 0; i < colorOptions.length; i++) {
                    if (colorOptions[i].getAttribute('data-theme') === 'heart js') {
                    colorOptions[i].style.display = 'initial';
            } else {
                colorOptions[i].style.display = 'none';
            }
        }
    }
});

 
// register for activities operations

let RegisterForActivities = document.querySelector('#activities');

var activitiesCost = document.querySelector('#activities-cost');
    let totalCost = 0
//adds values that are checked & totals them
RegisterForActivities.addEventListener("change", (e) => {
    let itemCost = parseInt(e.target.getAttribute('data-cost'))
    if (e.target.checked) {
        totalCost += itemCost;
    } else {
        totalCost -= itemCost;
    }
    activitiesCost.innerHTML = `Total: $${totalCost}`
})

//Payment info/select credit card as payment method when page loads
const paymentDropDown = document.querySelector("#payment")
let creditCard = document.getElementById("credit-card");
let paypal = document.getElementById("paypal");
let bitcoin = document.getElementById("bitcoin");

creditCard.style.display = 'none';
paypal.style.display = 'none';
bitcoin.style.display = 'none';

paymentDropDown[0].disabled = true

paymentDropDown.addEventListener ('change', (e) => {
    let paymentType = e.target.value;
    if (paymentType === "paypal") {
        creditCard.style.display = "none";
        paypal.style.display = "block";
        bitcoin.style.display = "none";
    } else if (paymentType === "bitcoin"){
        creditCard.style.display = "none";
        bitcoin.style.display = "block";
        paypal.style.display= "none";
    } else {
        creditCard.style.display = "block";
        bitcoin.style.display = "none";
        paypal.style.display= "none";
    }
})

// onto form validation

let emailAddress = document.getElementById("mail");
let creditCardNumber = document.getElementById("cc-num");
let zipCode = document.getElementById("zip");
let cvv = document.getElementById("cvv");
let form = document.querySelector("form");
let activitiesBox = document.getElementById("activities-box");

//name varify
function nameVerify(nameField) {
    let nameFieldInput = nameField.value
    let validName = /^.+$/.test(nameFieldInput);
    return validName;
};


// regex from : https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
function CreditcardVerify(creditCardNumber){
    let CreditcardInput = creditCardNumber.value;
    let validCreditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(CreditcardInput);
    return validCreditCard;
};

//regex zip varify
function zipVerify(zipCode){
    let zipCodeInput = zipCode.value;
    let validZip = /^[0-9]{5}/.test(zipCodeInput);
    return validZip;
};

//regex cvv verify
function cvvVerify(cvv){
    let cvvInput = cvv.value;
    let validCvv = /^[0-9]{3}/.test(cvvInput);
    return validCvv;
};

/** */
function emailVerify (emailAddress){
    userEmail = emailAddress.value;
    let validEmail = /^[^@]+@[^@.]+\.[a-z]+$/i.test(userEmail);
    return validEmail;
  }

  form.addEventListener('submit', (e) => {
      e.preventDefault()
  })


