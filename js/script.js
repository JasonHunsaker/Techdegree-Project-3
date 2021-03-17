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

shirtColor.disabled = "true";
shirtDesign.addEventListener("change", (e) => {
    colorDiv.style.display = ' ';

    if (e.target.value === 'js puns') {
        ;
        for (let i = 0; i < color.length; i++) {
            if (colorOptions[i].getAttribute('data-theme') === 'js puns') {
                colorOptions[i].style.display = ' ';
            } else {
                colorOptions[i].style.display = 'none';
            }
        }
        
}});

// skipping tshirt for now - will return later.  color selections not enabiling
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

paypal.style.display = 'none'
bitcoin.style.display = 'none'

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