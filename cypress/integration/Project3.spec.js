/// <reference types="cypress" />

describe('project3 actions', () => {
    it('should visit the webapp', () => {
        cy.visit('http://localhost:52330/index.html')
    })

    it('should fill in a name', () => {
        cy.get('#name').type('Jason')
    })

    it('enter an email address', () => {
        cy.get('#email').type('Jason@test.com')
    })
    
    it('should select a t-shirt size', () => {
        
    })
})



