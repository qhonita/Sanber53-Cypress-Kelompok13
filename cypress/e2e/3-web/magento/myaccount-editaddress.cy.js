const { italic } = require("colorette")

describe('Add New Address', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > :nth-child(2) > a').click()
    cy.url().should('contain','/customer/account/login/')  
  })

  it('Passed to Signin', () => {
    cy.get('#email').type('tes.mbagasrw@yopmail.com')
    cy.get('#pass').type('Welcome@123')
    cy.get('#send2').click()
  })

  it('Passed to Add Default Billing Address', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/')
    cy.get('.action.edit').click()
    cy.get('#firstname').type('Bagas')
    cy.get('#lastname').type('Bagas')
    cy.get('#company').type('Student')
    cy.get('#telephone').type('08512345678')
    cy.get('#street_1').type('Jl.Sanber')
    cy.get('#street_2').type('')
    cy.get('#street_3').type('')
    cy.get('#country').type('Indonesia')
    cy.get('#city').type('Jakarta')
    cy.get('#region_id').type('Jakarta')
    cy.get('#zip').type('12345')
    cy.get('.action.save.rimary').click()
  })
})