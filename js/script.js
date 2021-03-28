// name field operations
const nameField = document.getElementById("name");
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

const emailAddress = document.getElementById("mail");
const creditCardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const form = document.querySelector("form");
const activitiesBox = document.getElementById("activities-box");
let nameRegex = /^.+$/;

//regex from : https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
let ccRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
;
let zipRegex = /^[0-9]{5}/;
let cvvRegex = /^[0-9]{3}/;
//let emailInput = emailAddress.value;
let emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i/

//helper functions for validation
function isValidName(name) {
    let nameFieldInput = nameField.value;
    return nameRegex.test(nameFieldInput);
};

function isValidEmail(email) {
    let emailAddressInput = emailAddress.value;
    return emailRegex.test(emailAddressInput);
};

function isValidZip(zipcode) {
    let zipInput = zipCode.value;
    return zipRegex.test(zipInput);
};

function isValidCc(creditcardnumber) {
    let ccInput = creditCardNumber.value;
    return ccRegex.test(ccInput);
};

function isValidCvv(cvvnumber) {
    let cvvInput = cvv.value;
    return cvvRegex.test(cvvInput);
};

function validInput(validator) {
    element.classList.add("valid");
    element.classList.remove("not-valid");
    element.lastElementChild.style.display = "none";
};

function invalidInput(validator) {
    element.classList.add("not-valid");
    element.classList.remove("valid");
    element.lastElementChild.style.display = "block";
}

//refrences to all the "hints" in the HTML
const nameHint = document.getElementById("name-hint");
const emailHint = document.getElementById("email-hint");
const zipHint = document.getElementById("zip-hint");
const cvvHint = document.getElementById("cvv-hint");
const ccHint = document.getElementById("cc-hint");

form.addEventListener("submit", (e) => {
    if (isValidName() === false) {
        invalidInput(nameHint);
        e.preventDefault();
    } else {
        validInput(nameHint);
    }

    if (isValidEmail() === false) {
        invalidInput(emailHint);
        e.preventDefault;
    } else {
        validInput(emailHint);
    }
    
    if (isValidCc() === false) {
        invalidInput(ccHint);
        e.preventDefault();
    } else {
        validInput(ccHint);
    }

    if (isValidCvv() === false) {
        invalidInput(cvvHint);
        e.preventDefault;
    } else {
        validInput(cvvHint);
    
    }if (isValidZip() === false) {
        invalidInput(zipHint);
        e.preventDefault();
    } else {
        validInput(zipHint);
    }
})