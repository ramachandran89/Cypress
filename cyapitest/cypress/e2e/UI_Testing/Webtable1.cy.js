/// <reference types="cypress" />
//const { describe } = require("mocha");

describe('test', () => {
    it('Custom', () => {
        // cy.visit("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html")
        // cy.get('#customers').find('tr').should('be.enabled')
        cy.Launch()
        cy.log("custom command successfully achieve")

    })
    it('test1', () => {
        // cy.visit("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html")
        // cy.get('#customers').find('tr').should('be.enabled')
        console.log('ram')
        cy.log("Test 1 passed")

    })
    it('test2', () => {
        // cy.visit("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html")
        // cy.get('#customers').find('tr').should('be.enabled')
        let name = "ramachandran"
        cy.log("Test 2 passed====" + name)

    })
})

