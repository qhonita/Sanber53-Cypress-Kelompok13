import ObjRegister from "../../support/pageObject-register/Obj-register"
const Registerdata = require('../../fixtures/Registerdata.json')

describe('Register functionality', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > :nth-child(3) > a').click()
        cy.url().should('contain', '/customer/account/create/')
        })
    it('Failed to register - empty first name', () => {
            cy.get(ObjRegister.firstname).type(Registerdata.empty)
            cy.get(ObjRegister.lastname).type('Sanbercode')
            cy.get(ObjRegister.email).type('iniiii.kelompok13@gmail.com')
            cy.get(ObjRegister.password).type('Kelompok13.')
            cy.get(ObjRegister.passconfirm).type('Kelompok13.')
            cy.get(ObjRegister.submit).click()
            cy.get('[id="firstname-error"]').should('be.visible').and('contain', Registerdata["error-message"])
          })
    it('Failed to register - empty last name', () => {
            cy.get(ObjRegister.firstname).type('Kelompok 13')
            cy.get(ObjRegister.lastname).type(Registerdata.empty)
            cy.get(ObjRegister.email).type('iniiii.kelompok13@gmail.com')
            cy.get(ObjRegister.password).type('Kelompok13.')
            cy.get(ObjRegister.passconfirm).type('Kelompok13.')
            cy.get(ObjRegister.submit).click()
            cy.get('[id="lastname-error"]').should('be.visible').and('contain', Registerdata["error-message"])
          })
    it('Failed to register - empty email', () => {
            cy.get(ObjRegister.firstname).type('Kelompok 13')
            cy.get(ObjRegister.lastname).type('bootcamp')
            cy.get(ObjRegister.email).type(Registerdata.empty)
            cy.get(ObjRegister.password).type('Kelompok13.')
            cy.get(ObjRegister.passconfirm).type('Kelompok13.')
            cy.get(ObjRegister.submit).click()
            cy.get('[id="email_address-error"]').should('be.visible').and('contain', Registerdata["error-message"])
          })
    it('Failed to register - empty password', () => {
            cy.get(ObjRegister.firstname).type('Kelompok 13')
            cy.get(ObjRegister.lastname).type('bootcamp')
            cy.get(ObjRegister.email).type('kelompok13@gmail.com')
            cy.get(ObjRegister.password).type(Registerdata.empty)
            cy.get(ObjRegister.passconfirm).type('Kelompok13.')
            cy.get(ObjRegister.submit).click()
            cy.get('[id="password-error"]').should('be.visible').and('contain', Registerdata["error-message"])
          })
    it('Failed to register - empty email confirmation', () => {
            cy.get(ObjRegister.firstname).type('Kelompok 13')
            cy.get(ObjRegister.lastname).type('bootcamp')
            cy.get(ObjRegister.email).type('kelompok13@gmail.com')
            cy.get(ObjRegister.password).type('Kelompok13.')
            cy.get(ObjRegister.passconfirm).type(Registerdata.empty)
            cy.get(ObjRegister.submit).click()
            cy.get('[id="password-confirmation-error"]').should('be.visible').and('contain', Registerdata["error-message"])
          })
    it('Successfully Register', () => {
      cy.get(ObjRegister.firstname).type('Kelompok 13')
      cy.get(ObjRegister.lastname).type('Sanbercode')
      cy.get(ObjRegister.email).type('nnniii.kelompok13@gmail.com')
      cy.get(ObjRegister.password).type('Kelompok13.')
      cy.get(ObjRegister.passconfirm).type('Kelompok13.')
      cy.get(ObjRegister.submit).click()
      cy.UrlRegister('/customer/account/')
    })
})