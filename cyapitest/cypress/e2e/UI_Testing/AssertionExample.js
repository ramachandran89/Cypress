
describe('Katalon Test', function () {
    // it('Visit URL', function () {
    //     //let url = "https://cura.com/demo-home-health/";
    //     cy.visit('https://cura.com/demo-home-health/');
    //     //cy.visit(url)
    //     //cy.getCookies('https://cura.com/demo-home-health/');

    // });

    it('add', function () {
        let a = 5;
        cy.log('The value of a is', a)



    })
    it('Assertion', function () {
        cy.visit("https://cura.com/demo-home-health/")
        let x = cy.title("https://cura.com/demo-home-health/")
        cy.log("url of the web pageis----",x)
        cy.url().should('contains', 'cura')
        cy.url().should('eq','https://cura.com/demo-home-health/')
        cy.url().should('contain','demo')
        cy.location('href').should('include', 'home-health/')
        cy.location().its('href').should('include', 'home-health/')
       

        

    })
    it('Multiple Assertion', function () {
        cy.visit("https://cura.com/demo-home-health/")
        let x = cy.title("https://cura.com/demo-home-health/")
        cy.log("url of the web pageis----",x)
        //mulitple assertion using and
        cy.url().should('contains', 'cura').and('eq','https://cura.com/demo-home-health/').and('contain','demo')
        cy.location('href').should('include', 'home-health/')
        cy.location().its('href').should('include', 'home-health/')          

    })

    it('Not equal Assertion', function () {
        cy.visit("https://cura.com/demo-home-health/")
        let x = cy.title("https://cura.com/demo-home-health/")
        cy.log("url of the web pageis----",x)
        //not equal assertion
        cy.url().not('contains', 'xxx')

        // cy.url().not('eq','https://cura.com/demo-home-health/')
        // cy.url().should('contain','demo')
        // cy.location('href').should('include', 'home-health/')
        // cy.location().its('href').should('include', 'home-health/')  
        

    })
});