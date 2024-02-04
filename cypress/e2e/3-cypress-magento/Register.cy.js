import ObjRegister from "../../support/pageObject-register/Obj-register"

describe('Register functionality', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > :nth-child(3) > a').click()
        cy.url().should('contain', '/customer/account/create/')
        })
    it('Failed to register - empty first name', () => {
            cy.get(ObjRegister.firstname).type(' ')
            cy.get(ObjRegister.lastname).type('Sanbercode')
            cy.get(ObjRegister.email).type('iniiii.kelompok13@gmail.com')
            cy.get(ObjRegister.password).type('Kelompok13.')
            cy.get(ObjRegister.passconfirm).type('Kelompok13.')
            cy.get(ObjRegister.submit).click()
            cy.get('[id="firstname-error"]').should('be.visible').and('contain', 'This is a required field.')
          })
    it('Successfully Register', () => {
      cy.get('[id="firstname"]').type('Kelompok 13')
      cy.get('[id="lastname"]').type('Sanbercode')
      cy.get('[name="email"]').type('nniii.kelompok13@gmail.com')
      cy.get('#password').type('Kelompok13.')
      cy.get('#password-confirmation').type('Kelompok13.')
      cy.get('.submit.submit').click()
      cy.url().should('contain', '/customer/account/')
    })
})