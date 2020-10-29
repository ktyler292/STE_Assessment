/// <reference types = "Cypress" />

describe('Tests for STE Assessment', () => {


    it('logs into the system with incorrect credentials, confirms error page loads', function () {
        const username = 'HG^^^&*H'
        const password = ']G_ce[24Ghd3'
        cy.visit('https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login')
        cy.contains('Username').type(username)
        cy.contains('Password').type(password)
        cy.get('form').submit()
        cy.contains('Error');
        
    });

    it('logs into the system with correct credentials, confirms correct page was loaded and an existing employee is found within table', function () {
        const username = 'TestUser32'
        const password = ']G_ce[24Ghd3'
        cy.visit('https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login')
        cy.contains('Username').type(username)
        cy.contains('Password').type(password)
        cy.get('form').submit()
        cy.url().should('eq', 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Benefits');
        cy.get('table').contains('td', 'Stacy').should('be.visible');

    });

    it('creates new employee and confirms they were added', function () {
        cy.contains('Add').click()

        cy.get('input[name=firstName]').type('Jason')
        cy.get('input[name=lastName]').type('Giddeon')
        cy.get('input[name=dependants]').type('3')
        cy.get('form').submit()
        cy.get('table').contains('td', 'Jason').should('be.visible');



    });

})


