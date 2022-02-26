/// <reference types="cypress" />

function getRndInteger(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
    }