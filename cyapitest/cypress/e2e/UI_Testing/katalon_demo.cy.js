it('Not equal Assertion', function () {
    cy.visit("https://cura.com/demo-home-health/")
    let x = cy.title("https://cura.com/demo-home-health/")
    cy.log("url of the web pageis----",x)
    //not equal assertion
    cy.url().not.equa('contains', 'xxx')

    // cy.url().not('eq','https://cura.com/demo-home-health/')
    // cy.url().should('contain','demo')
    // cy.location('href').should('include', 'home-health/')
    // cy.location().its('href').should('include', 'home-health/')  
    

})