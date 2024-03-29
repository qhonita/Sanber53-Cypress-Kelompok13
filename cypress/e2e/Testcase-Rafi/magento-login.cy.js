describe('Login Functionality', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel.wrapper > .panel').should('be.visible')
    })
    it('Verify Success Login', () => {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('.base').should('contain.text','Customer Login')
        cy.get('#email').type('kelompok13@gmail.com')
        cy.get('#pass').type('kelompok13!')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.get(':nth-child(2) > .greet > .logged-in').should('contain.text','Welcome, Kelompok TigaBelas!')
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click()
        cy.screenshot('Screenshot-Verify Success Login')
    })
    it('Verify Failed Login - Wrong Password', () => {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('.base').should('contain.text','Customer Login')
        cy.get('#email').type('kelompok13@gmail.com')
        cy.get('#pass').type('123')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.get('.message-error').should('contain.text','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
        cy.screenshot('Screenshot-Wrong Password')
    })
    it('Verify Failed Login - Wrong Input Capital', () => {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('.base').should('contain.text','Customer Login')
        cy.get('#email').type('kelompok13@gmail.com')
        cy.get('#pass').type('Kelompok13!')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.get('.message-error').should('contain.text','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
        cy.screenshot('Screenshot-Wrong Input Capital')
    })
})