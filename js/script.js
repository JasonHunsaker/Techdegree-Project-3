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
let shirtDesign = document.querySelector('#design')
let shirtColor = document.querySelector('#color')
let colorOptions = shirtColor.children

