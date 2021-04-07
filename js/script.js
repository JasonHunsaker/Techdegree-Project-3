// name field operations
const nameField = document.querySelector("#name");
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
let activitiesSelection = document.querySelectorAll('input[type=checkbox]');

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


//Payment info/force user to select a payment option
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
});

// onto form validation

const emailAddress = document.querySelector("#email");
const creditCardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const form = document.querySelector("form");
const activitiesBox = document.getElementById("activities-box");
let nameRegex = /^.+$/;
let zipRegex = /^[0-9]{5}/;
let cvvRegex = /^[0-9]{3}/;
let emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i/

//Function for successful validation

function validInfo(element) {
    element.parentElement.classList.add("valid");
    element.parentElement.classList.remove("not-valid");
    element.parentElement.lastElementChild.hidden = true;
};

function invalidInfo(element) {
    element.parentElement.classList.add("not-valid");
    element.parentElement.classList.remove("valid");
    element.parentElement.lastElementChild.hidden = false;
};

//functions for name & email validation
function isValidName(name) {
    const nameTest = nameRegex.test(nameField.value);
    if (nameTest == true) {
        validInfo(nameField);
    } else {
        invalidInfo(nameField);
    }
    return nameTest;    
};

function isValidEmail(email) {
    const emailTest = emailRegex.test(emailAddress.value);
    if (emailTest == true) {
        validInfo(emailAddress);
    } else {
        invalidInfo(emailAddress);
    }
    return emailTest;
};




//refrences to all the "hints" in the HTML
const nameHint = document.getElementById("name-hint");
const emailHint = document.getElementById("email-hint");
const zipHint = document.getElementById("zip-hint");
const cvvHint = document.getElementById("cvv-hint");
const ccHint = document.getElementById("cc-hint");

form.addEventListener('submit', (e) => {
    if (!nameTest()) {
        e.preventDefault();
        console.log("bad name")
      }
      if (!emailTest()) {
        e.preventDefault();
        console.log("bad email")
      }
});

