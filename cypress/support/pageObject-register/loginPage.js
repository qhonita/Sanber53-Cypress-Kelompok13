class loginPage{
    email = '#email'
    pwd = '[name="login[password]"]'
    login = '.action.login.primary'
    err = '.message-error'

    verifyError(){
        cy.get(this.err).should('be.visible')
    }
    clickLogin(){
        cy.get(this.login).click()
    }
}
export default new loginPage()