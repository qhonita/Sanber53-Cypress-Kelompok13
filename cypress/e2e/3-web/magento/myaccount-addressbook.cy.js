const { italic } = require("colorette")
import addressBook from "../../../support/obj-address-book/page-obj-addressbook"

describe('Add New Address', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > :nth-child(2) > a').click()
    cy.url().should('contain','/customer/account/login/')  
  })

  it('Successfully Login', () => {
    cy.get(loginPage.email).type('tes.mbagasrw@yopmail.com')
    cy.get(loginPage.pwd).type('Welcome@123')
    loginPage.clickLogin()
  })

  it('Passed to MyAccount', () => {
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/')
    //cy.get('https://magento.softwaretestingboard.com/customer/account/').click()
    cy.get(addressBook.actionedit).click()
  })

  it('Passed to Add Default Billing Address', () => {
    cy.get(addressBook.firstname).type('Bagas')
    cy.get(addressBook.lastname).type('Bagas')
    cy.get(addressBook.company).type('Student')
    cy.get(addressBook.telephone).type('08512345678')
    cy.get(addressBook.street_1).type('Jl.Sanber')
    cy.get(addressBook.street_2).type('')
    cy.get(addressBook.street_3).type('')
    cy.get(addressBook.country).type('Indonesia')
    cy.get(addressBook.city).type('Jakarta')
    cy.get(addressBook.region_id).type('Jakarta')
    cy.get(addressBook.zip).type('12345')
    cy.get(addressBook.actionsaveprimary).click()
  })
})