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
    return totalCost;
})

//add in focus indicators for checkboxes
for (let i = 0; i < activitiesSelection.length; i += 1) {
    activitiesSelection[i].addEventListener("focus", e => {
        activitiesSelection[i].parentElement.classList.add("focus");
    });
    activitiesSelection[i].addEventListener("blur", e => {
        activitiesSelection[i].parentElement.classList.remove("focus");
    });
  };

//Payment info/force user to select a payment option
const paymentDropDown = document.querySelector("#payment")
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

// onto form validation

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
};

function invalidInfo(element) {
    element.parentElement.classList.add("not-valid");
    element.parentElement.classList.remove("valid");
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

// activity validation function
function isValidActivity(activity) {
    let validActivity = totalCost > 0
    if (validActivity) {
    activitiesBox.classList.add("valid");
    activitiesBox.classList.remove("not-valid");
} else {
    activitiesBox.classList.remove("valid");
    activitiesBox.classList.add("not-valid");
    };
    return validActivity
}

// validation functions for credit card payment option
function isValidCreditCard(CCnumber) {
    const ccNumTest = ccNumRegex.test(creditCardNumber.value)
    if (ccNumTest == true) {
        validInfo(creditCardNumber);
    } else {
        invalidInfo(creditCardNumber);
    }
    return ccNumTest;
};

function isValidZip(zipcode) {
    const zipTest = zipRegex.test(zipCode.value)
    if (zipTest == true) {
        validInfo(zipCode);
    } else {
        invalidInfo(zipCode);
    }
    return zipTest
};

function isValidCvv(cvv) {
    const cvvTest = cvvRegex.test(cvvNumber.value)
    if (cvvTest == true) {
        validInfo(cvvNumber);
    } else {
        invalidInfo(cvvNumber);
    }
    return cvvTest
};


//refrences to all the "hints" in the HTML
const nameHint = document.getElementById("name-hint");
const emailHint = document.getElementById("email-hint");
const activitiesHint = document.getElementById("activities-hint");
const zipHint = document.getElementById("zip-hint");
const cvvHint = document.getElementById("cvv-hint");
const ccHint = document.getElementById("cc-hint");

form.addEventListener('submit', (e) => {
    if (!isValidName()) {
        e.preventDefault();
        nameHint.style.display = "block"
    } else {
          nameHint.style.display = "none"
      }
    if (!isValidEmail()) {
        e.preventDefault();
        emailHint.style.display = "block";
      } else {
        emailHint.style.display = "none";
      }
    if (!isValidActivity()) {
        e.preventDefault();
        activitiesHint.style.display = "block";
    } else {
        activitiesHint.style.display = "none";
    }
    if (paymentDropDown.value === 'credit-card') {
        if (!isValidCreditCard()) {
            e.preventDefault();
            ccHint.style.display = "block";
        } else {
            ccHint.style.display = "none";
        }

        if (!isValidCvv()) {
            e.preventDefault();
            cvvHint.style.display = "block";
        } else {
            cvvHint.style.display = "none";
        }

        if (!isValidZip()) {
            e.preventDefault();
            zipHint.style.display = "block";
        } else {
            zipHint.style.display = "none";
        }
    }
});

