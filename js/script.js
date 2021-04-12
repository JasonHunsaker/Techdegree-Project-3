// name field operations 
const nameField = document.querySelector("#name");
nameField.focus();

//job role operations - input box should appear if "other" is selected
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

//tshirt operations - selections in dropdown should change depending on theme selection
let shirtDesign = document.querySelector('#design');
let shirtColor = document.querySelector('#color');
let colorDiv = document.getElementById("shirt-colors")
let colorOptions = shirtColor.children;

shirtColor.disabled = true;

//fixed issue with color selection using https://www.aspsnippets.com/Articles/Reset-Clear-DropDownList-selection-selected-value-using-JavaScript-and-jQuery.aspx as a reference

shirtDesign.addEventListener("change", (e) => {
   
    shirtColor.selectedIndex = 0
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


 
// register for activities operations - clicking checkboxes should generate a total for payment

let RegisterForActivities = document.querySelector('#activities');
var activitiesCost = document.querySelector('#activities-cost');
let totalCost = 0;
let activitiesSelection = document.querySelectorAll('input[type=checkbox]');

//adds values that are checked & totals them
RegisterForActivities.addEventListener("change", (e) => {
    let itemCost = parseInt(e.target.getAttribute('data-cost'));
    if (e.target.checked) {
        totalCost += itemCost;
    } else {
        totalCost -= itemCost;
    }
    
    activitiesCost.innerHTML = `Total: $${totalCost}`;
    return totalCost;
});

//add in focus indicators for checkboxes
for (let i = 0; i < activitiesSelection.length; i += 1) {
    activitiesSelection[i].addEventListener("focus", e => {
        activitiesSelection[i].parentElement.classList.add("focus");
    });
    activitiesSelection[i].addEventListener("blur", e => {
        activitiesSelection[i].parentElement.classList.remove("focus");
    });
  };

//Payment info - cc should be selected by default with the paypal & bitcoin options having elements appear on page if selected
const paymentDropDown = document.querySelector("#payment");
let creditCard = document.getElementById("credit-card");
let paypal = document.getElementById("paypal");
let bitcoin = document.getElementById("bitcoin");

creditCard.style.display = 'block';
paypal.style.display = 'none';
bitcoin.style.display = 'none';

paymentDropDown[1].selected = true

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

// onto form validation - any error in the users : name, email, not registering for an activity; or if paying by creditcard, their ccnumber, zipcode or cvv not meeting requirements,
// should prevent form from submitting

const emailAddress = document.querySelector("#email");
const creditCardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const cvvNumber = document.getElementById("cvv");
const form = document.querySelector("form");
const activitiesBox = document.getElementById("activities-box");

const nameRegex = /^.+$/;
const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
const zipRegex = /^[0-9]{5}$/;
const cvvRegex = /^[0-9]{3}$/;
const ccNumRegex = /^[0-9]{13,16}$/;


//Function for successful validation

function validInfo(element) {
    element.parentElement.classList.add("valid");
    element.parentElement.classList.remove("not-valid");
    element.parentElement.lastElementChild.style.display = "none";
};

function invalidInfo(element) {
    element.parentElement.classList.add("not-valid");
    element.parentElement.classList.remove("valid");
    element.parentElement.lastElementChild.style.display = "block";
};

//functions for name, email, and activity validation
function isValidName() {
    const nameTest = nameRegex.test(nameField.value);
    if (nameTest == true) {
        validInfo(nameField);
    } else {
        invalidInfo(nameField);
    }
    return nameTest;    
};

function isValidEmail() {
    const emailTest = emailRegex.test(emailAddress.value);
    if (emailTest == true) {
        validInfo(emailAddress);
    } else {
        invalidInfo(emailAddress);
    }
    return emailTest;
};

function isValidActivity() {
    let validActivity = totalCost > 0
    if (validActivity) {
        validInfo(activitiesBox);
    } else {
        invalidInfo(activitiesBox);
    };
    return validActivity;
};

// validation functions for credit card payment option
function isValidCreditCard() {
    const ccNumTest = ccNumRegex.test(creditCardNumber.value)
    if (ccNumTest == true) {
        validInfo(creditCardNumber);
    } else {
        invalidInfo(creditCardNumber);
    }
    return ccNumTest;
};

function isValidZip() {
    const zipTest = zipRegex.test(zipCode.value)
    if (zipTest == true) {
        validInfo(zipCode);
    } else {
        invalidInfo(zipCode);
    }
    return zipTest
};

function isValidCvv() {
    const cvvTest = cvvRegex.test(cvvNumber.value)
    if (cvvTest == true) {
        validInfo(cvvNumber);
    } else {
        invalidInfo(cvvNumber);
    }
    return cvvTest;
};




form.addEventListener('submit', (e) => {
    if (!isValidName()) {
        e.preventDefault();
    }

    if (!isValidEmail()) {
        e.preventDefault();
    }

    if (!isValidActivity()) {
        e.preventDefault();
    }
    if (paymentDropDown.value === 'credit-card') {
        if (!isValidCreditCard()) {
            e.preventDefault();
        }

        if (!isValidCvv()) {
            e.preventDefault();
        }

        if (!isValidZip()) {
            e.preventDefault();
        }
    }
});

