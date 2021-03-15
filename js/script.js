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
        shirtColor.disabled = "false";
        for (let i = 0; i < color.length; i++) {
            if (colorOptions[i].getAttribute('data-theme') === 'js puns') {
                colorOptions[i].style.display = ' ';
            } else {
                colorOptions[i].style.display = 'none';
            }
        }
        
}});

// skipping tshirt for now - will return later