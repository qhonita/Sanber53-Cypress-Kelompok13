describe('Edit account', () => {
  beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.get('.panel > .header > :nth-child(2) > a').click()
      cy.url().should('contain','/customer/account/login/')  
      cy.get('[id="email"]').type('ini.kelompok13@gmail.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Kelompok13.')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
      cy.url().should('contain', 'https://magento.softwaretestingboard.com/')
      cy.visit('https://magento.softwaretestingboard.com/customer/account/')
      cy.get(':nth-child(7) > a').click()
      cy.url().should('contain','/customer/account/edit/')
    })
    it('Firstname-error', () => {
        cy.get('#firstname').clear()
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('#firstname-error').should('be.visible').and('contain', 'This is a required field.')
          })
    it('Lastname-error', () => {
        cy.get('#lastname').clear()
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('#lastname-error').should('be.visible').and('contain', 'This is a required field.')
          })
    it('Firstname-success', () => {
        cy.get('#firstname').clear().type('editkelompok13')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.url().should('contain','/customer/account/')
              })
    it('Lastname-success', () => {
        cy.get('#lastname').clear().type('sanbercode53')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.url().should('contain','/customer/account/')
              })
      })