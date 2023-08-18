///<reference types="Cypress" />
describe('Demoqa', function () {
    
    it('demo', ()=> {
        cy.visit("https://demoqa.com/")
        cy.xpath("//h5[normalize-space()='Elements']").click()
        cy.xpath("//span[normalize-space()='Text Box']").click()
        cy.xpath("//input[@id='userName']").type('ram')
        cy.xpath("//input[@id='userEmail']").type('rama@ikkma')
        cy.xpath("//textarea[@id='currentAddress']']").type('chennai')
        cy.xpath("//textarea[@id='permanentAddress']").type('chennai')
        
    
        // cy.xpath("//input[@placeholder='Username']").type(this.testdata.username)
        // cy.xpath("//input[@placeholder='Password']").type(this.testdata.password)
        // cy.xpath("//button[@type='submit']").click()
        // // cy.get('#txtUsername').type(this.testdata.username)
        // // cy.get('#txtPassword').type(this.testdata.password)
        // //cy.get('#btnLogin').click()
        // //y.get('#welcome').contains(this.testdata.welcomeText)
        // cy.x
    })
})