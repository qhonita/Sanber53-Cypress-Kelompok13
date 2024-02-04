import loginPage from "../../../support/pageObject/loginPage"

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
  it('Successfully Login', () => {
    cy.get(loginPage.email).type('kelompok13@gmail.com')
    cy.get(loginPage.pwd).type('kelompok13!') 
    loginPage.clickLogin()
    cy.url().should('contain', '/magento.softwaretestingboard.com/')
  })
})