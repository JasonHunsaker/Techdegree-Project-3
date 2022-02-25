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
    
    it('should select a t-shirt size and design', () => {
        cy.get('#size').select('large')
        cy.get('#design').select('js puns')
        cy.get('#color').select('Dark Slate Grey (JS Puns shirt only)')
    })

    it('should select a job role', () => {
        cy.get('#title').select('Designer')
    })

    it('should register for activities', () => {
        cy.get('#activities-box > :nth-child(1)').click()
        cy.get('#activities-box > :nth-child(4)').click()
        cy.get('#activities-box > :nth-child(7)').click()
    })

    

    it('should make sure the total is correct', () => {
     

    })
})



