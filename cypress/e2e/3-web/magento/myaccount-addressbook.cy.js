const { italic } = require("colorette")

import objAddressbook from "../../../support/page-obj-addressbook/obj-addressbook"
require('cypress-xpath');

describe('Address Book', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > :nth-child(2) > a').click()
    cy.url().should('contain','/customer/account/login/')  
    cy.get(objAddressbook.email).type('tes.mbagasrw@yopmail.com')
    cy.get(objAddressbook.pass).type('Welcome@123')
    cy.get(objAddressbook.btn_login).click()
    cy.wait(5000)
    cy.xpath("/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button", {timeout: 5000, multiple: true}).click()
    cy.xpath("//div[@aria-hidden='false']//a[normalize-space()='My Account']", {timeout: 10000}).click()
    cy.xpath("//div[@class='column main']//div[@class='block block-dashboard-addresses']//div[@class='block-content']//div[@class='box box-billing-address']//div[@class='box-actions']//a[@class='action edit']/span",{ multiple: true }).click()
  })

  it('Passed to Edit Address Book', () => {
    cy.get(objAddressbook.firstname).clear()
    cy.get(objAddressbook.firstname).type('Bagas')
    cy.get(objAddressbook.lastname).clear()
    cy.get(objAddressbook.lastname).type('Bagas')
    cy.get(objAddressbook.company).clear()
    cy.get(objAddressbook.company).type('Student')
    cy.get(objAddressbook.telephone).clear()
    cy.get(objAddressbook.telephone).type('08512345678')
    cy.get(objAddressbook.street_1).clear()
    cy.get(objAddressbook.street_1).type('Jl.Sanber')
    cy.get(objAddressbook.street_2).clear()
    cy.get(objAddressbook.street_2).type('no.53')
    cy.get(objAddressbook.street_3).clear()
    cy.get(objAddressbook.street_3).type('Grogol')
    cy.get(objAddressbook.country, {timeout: 10000}).select('Indonesia')
    cy.get(objAddressbook.region).clear()
    cy.get(objAddressbook.region).type('DKI Jakarta')
    cy.get(objAddressbook.city).clear()
    cy.get(objAddressbook.city).type('Jakarta Barat')
    cy.get(objAddressbook.zip).clear()
    cy.get(objAddressbook.zip).type('12345')
    cy.get(objAddressbook.btn_SaveAddressBook).click()
    //cy.screenshot('Screenshot-Passed to Edit Address Book')
  })

  it('Edit Address Book - First Name Empty', () => {
    cy.get(objAddressbook.firstname).clear()
    cy.get(objAddressbook.btn_SaveAddressBook).click()
    cy.get('#firstname-error').should('be.visible').and('contain.text', 'This is a required field.')
    //cy.screenshot('Screenshot-Passed to Edit Address Book')
  })

  it('Edit Address Book - Last Name Empty', () => {
    cy.get(objAddressbook.lastname).clear()
    cy.get(objAddressbook.btn_SaveAddressBook).click()
    cy.get('#lastname-error').should('be.visible').and('contain.text', 'This is a required field.')
    //cy.screenshot('Screenshot-Passed to Edit Address Book')
  })

  it('Edit Address Book - Telephone Empty', () => {
    cy.get(objAddressbook.telephone).clear()
    cy.get(objAddressbook.btn_SaveAddressBook).click()
    cy.get('#telephone-error').should('be.visible').and('contain.text', 'This is a required field.')
    //cy.screenshot('Screenshot-Passed to Edit Address Book')
  })

  it('Edit Address Book - Street Empty', () => {
    cy.get(objAddressbook.street_1).clear()
    cy.get(objAddressbook.street_2).clear()
    cy.get(objAddressbook.street_3).clear()
    cy.get(objAddressbook.btn_SaveAddressBook).click()
    cy.get('#street_1-error').should('be.visible').and('contain.text', 'This is a required field.')
    //cy.screenshot('Screenshot-Passed to Edit Address Book')
  })

  it('Edit Address Book - City Empty', () => {
    cy.get(objAddressbook.city).clear()
    cy.get(objAddressbook.btn_SaveAddressBook).click()
    cy.get('#city-error').should('be.visible').and('contain.text', 'This is a required field.')
    //cy.screenshot('Screenshot-Passed to Edit Address Book')
  })

  it('Edit Address Book - ZIP Empty', () => {
    cy.get(objAddressbook.zip).clear()
    cy.get(objAddressbook.btn_SaveAddressBook).click()
    cy.get('#zip-error').should('be.visible').and('contain.text', 'This is a required field.')
    //cy.screenshot('Screenshot-Passed to Edit Address Book')
    //objAddressbook.verifyError()
  })

  it('Edit Address Book - Field Empty', () => {
    cy.get(objAddressbook.firstname).clear()
    cy.get(objAddressbook.lastname).clear()
    cy.get(objAddressbook.telephone).clear()
    cy.get(objAddressbook.street_1).clear()
    cy.get(objAddressbook.street_2).clear()
    cy.get(objAddressbook.street_3).clear()
    cy.get(objAddressbook.city).clear()
    cy.get(objAddressbook.zip).clear()
    cy.get(objAddressbook.btn_SaveAddressBook).click()
    cy.get('#firstname-error').should('be.visible').and('contain.text', 'This is a required field.')
    cy.get('#lastname-error').should('be.visible').and('contain.text', 'This is a required field.')
    cy.get('#telephone-error').should('be.visible').and('contain.text', 'This is a required field.')
    cy.get('#street_1-error').should('be.visible').and('contain.text', 'This is a required field.')
    cy.get('#city-error').should('be.visible').and('contain.text', 'This is a required field.')
    cy.get('#zip-error').should('be.visible').and('contain.text', 'This is a required field.')
    //cy.screenshot('Screenshot-Failed to Edit Address Book - Mandatory Field Empty')
  })

  it('Edit Address Book - Non Mandatory Field Empty', () => {
    cy.get(objAddressbook.company).clear()
    cy.get(objAddressbook.region).clear()
    cy.get(objAddressbook.btn_SaveAddressBook).click()
    //cy.screenshot('Screenshot-Failed to Edit Address Book - Non Mandatory Field Empty')
  })
})