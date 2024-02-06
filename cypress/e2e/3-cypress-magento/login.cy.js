import loginPage from "../../../support/pageObject/loginPage"
//const logindata = require('../../fixtures/logindata.json')

describe('Login Functionality', () => {
  beforeEach(() => { 
    cy.visit('')
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.url().should('contain', '/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
  })
  it('Failed to Login - Wrong password', () => {
    cy.get(loginPage.email).type('kelompok13@gmail.com')
    cy.get(loginPage.pwd).type('123456') 
    loginPage.clickLogin()
    loginPage.verifyError()
  })
  it.skip('Failed to Login - Empty password', () => {
    cy.get(loginPage.email).type('kelompok13@gmail.com')
    cy.get(loginPage.pwd).type(logindata.empty) 
    loginPage.clickLogin()
    cy.get('[id="pass-error"]').should('be.visible').and('contain', logindata["error-message"])
  })
  it('Failed to Login - Wrong email', () => {
    cy.get(loginPage.email).type('kel@gmail.com')
    cy.get(loginPage.pwd).type('kelompok13!') 
    loginPage.clickLogin()
    loginPage.verifyError()
  })
  it.skip('Failed to Login - Empty email', () => {
    cy.get(loginPage.email).type(logindata.empty)
    cy.get(loginPage.pwd).type('kelompok13!') 
    loginPage.clickLogin()
    cy.get('[class="input-text mage-error"]').should('be.visible').and('contain', logindata["error-message"])
  })
  it.skip('Failed to Login - Empty email and password', () => {
    cy.get(loginPage.email).type(logindata.empty)
    cy.get(loginPage.pwd).type(logindata.empty) 
    loginPage.clickLogin()
    cy.get('[id="pass-error"]').should('be.visible').and('contain', logindata["error-message"])
  })
  it('Successfully Login', () => {
    cy.get(loginPage.email).type('kelompok13@gmail.com')
    cy.get(loginPage.pwd).type('kelompok13!') 
    loginPage.clickLogin()
    cy.url().should('contain', '/magento.softwaretestingboard.com/')
  })
})