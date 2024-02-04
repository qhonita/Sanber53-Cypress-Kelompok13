import registerpage from "../../support/pageObject-register/registerpage"

describe('Register functionality', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > :nth-child(3) > a').click()
        cy.url().should('contain', '/customer/account/create/')
        })
    it('Failed to register - empty first name', () => {
            cy.get(registerpage.firstname).type(' ')
            cy.get(registerpage.lastname).type('Sanbercode')
            cy.get(registerpage.email).type('iniiii.kelompok13@gmail.com')
            cy.get(registerpage.password).type('Kelompok13.')
            cy.get(registerpage.passconf).type('Kelompok13.')
            cy.get(registerpage.submit).click()
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