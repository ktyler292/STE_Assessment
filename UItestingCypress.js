/// <reference types = "Cypress" />

describe('Tests for STE Assessment', () => {

    const siteaddress = 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login'


    it('logs into the system with incorrect credentials, confirms error page loads', function () {
        const username = 'HG^^^&*H'
        const password = ']G_ce[24Ghd3'
        cy.visit(siteaddress)
        cy.contains('Username').type(username)
        cy.contains('Password').type(password)
        cy.get('form').submit()
        cy.contains('Error');
        
    });

   const username = 'TestUser61'
   const password = '9[ni(+j1w#oY'

    it('logs into the system with correct credentials, confirms correct page was loaded and an existing employee is found within table', function () {
        cy.visit(siteaddress)
        cy.get('input[id=Username]').type(username)
        cy.get('input[id=Password').type(password)
        cy.get('form').submit()
        cy.url().should('eq', 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Benefits');
        cy.get('table').contains('td', 'Patty').should('be.visible');

    });

    it('creates new employee and confirms they were added with the employee list page', function () {
        cy.visit(siteaddress)
        cy.get('input[id=Username]').type(username)
        cy.get('input[id=Password').type(password)
        cy.get('form').submit()
        cy.get('button[id=add]').click()
        cy.get('input[name=firstName]').type('Jason')
        cy.get('input[name=lastName]').type('Giddeon')
        cy.get('input[name=dependants]').type('3')
        cy.get('button[id=addEmployee]').click()
        cy.get('table').contains('td', 'Jason').should('be.visible');
    });

})
