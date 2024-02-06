class objAddressbook {
    email = '[name="login[username]"]'
    pass = '#pass'
    firstname = '#firstname'
    lastname = '#lastname'
    company = '#company'
    telephone = '#telephone'
    street_1 = '#street_1'
    street_2 = '#street_2'
    street_3 = '#street_3'
    country = '#country'
    region = '#region'
    city = '#city'
    zip = '#zip'
    btn_login = '.action.login.primary'
    btn_SaveAddressBook = '.action.save.primary'
    err = '#firstname-error'

    //verifyError(){
        //cy.get(this.err).should('be.visible')
    //}
    clickLogin(){
        cy.get(this.btn_login).click()
    }
}

export default new objAddressbook