/// <reference types="Cypress"/>

const { getJSON } = require("cypress/types/jquery")  

describe("http", () => {
    
    it("intercept",()=>{
        cy.visit("https://jsonplaceholder.typicode.com/")

        cy.intercept({
            path: '/posts'
        }).as('posts')
        cy.xpath('//tbody/tr[1]/td[1]/a[1]').click()
        cy.wait(posts).then(inter=>{
            cy.log(getJSON.stringify(inter))
            console.log(getJSON.stringify(inter))
        })
         
    })
})