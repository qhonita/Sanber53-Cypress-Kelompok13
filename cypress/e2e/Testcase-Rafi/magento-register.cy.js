import ObjRegister from "../../support/pageObject-register/Obj-register"

describe('Registed Account', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel.wrapper > .panel').should('be.visible')
    })
    it('Success Create Account',() => {
        cy.get('.panel > .header > :nth-child(3) > a').click()
        cy.get('.base').should('contain.text','Create New Customer Account')
        // cy.get('[data-layer="Content"]').should('be.checked')
        cy.get('.info > .legend > span').should('be.visible','Personal Information')
        cy.get('#firstname').type('Pasha')
        cy.get('#lastname').type('Ungu')
        cy.get('.account > .legend > span').should('be.visible','Sign-in Information')
        cy.get('#email_address').type('unguband2010@gmail.com')
        cy.get('#password').type('musisi2010')
        cy.get('#password-confirmation').type('musisi2010')
        cy.get(ObjRegister.submit).click()
        cy.get('#password-strength-meter').should('be.ok')
        cy.get('#password-error').should('contain.text','Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
        cy.screenshot('Screenshot-Failed Create Account')
    })
})