it('adactin', () => {
    cy.visit("https://adactinhotelapp.com/")
    cy.xpath("//input[@id='username']").as('name')
    //.should('have.attr','class').and('have.text','Up to 40% off | Baby care')
    cy.get('@name').clear()
    cy.get('@name').type('ramaikkm02')

})