/// <reference types = "Cypress" />

describe('Tests for STE Assessment', () => {


    it('logs into the system with incorrect credentials, expecting error message', function () {
        const username = 'HG^^^&*H'
        const password = ']G_ce[24Ghd3'
        cy.visit('https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login')
        cy.contains('Username').type(username)
        cy.contains('Password').type(password)
        cy.get('form').submit()

        cy.contains('.error-messages li','invalid username or password')

    });
    it('logs into the system with incorrect credentials,expecting error page to populate', function () {
        const username = 'HG^^^&*H'
        const password = ']G_ce[24Ghd3'
        cy.visit('https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login')
        cy.contains('Username').type(username)
        cy.contains('Password').type(password)
        cy.get('form').submit()
        cy.contains('Error')

    });
    it('logs into the system with correct credentials', function () {
        const username = 'TestUser32'
        const password = ']G_ce[24Ghd3'
        cy.visit('https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login')
        cy.contains('Username').type(username)
        cy.contains('Password').type(password)
        cy.get('form').submit()

    });

    it('creates new employee with entry over dependent max-expecting error', function () {
        cy.contains('Add').click()

        cy.get('input[name=firstName]').type('Jason')
        cy.get('input[name=lastName]').type('Giddeon')
        cy.get('input[name=dependants]').type('100')
        cy.get('form').submit()


    });

})


