it('adactin', () => {
    cy.visit("https://adactinhotelapp.com/index.php")
    cy.fixture('adactin.json').then(function (testdata) {

        // cy.fixture('G:\VISUAL STUDIO CODE\CYPRESS_PROJECTS_2023\cyapitest\cypress\fixtures\adactin.json')
        // .then(data1){
        // cy.get('#username').type('ramaikkm02').should('have.value','ramaikkm02')
        // cy.get('#password').type('Rama1234').should('have.value','Rama1234')
        cy.get('#username').type(testdata.name)
        cy.get('#password').type(testdata.pwd)
        cy.get('#login').click()
        cy.wait(4000)
        cy.get('select[id="location"]').select('Sydney').should('have.value', 'Sydney')
        cy.get('select[id="hotels"]').select('Hotel Creek').should('have.value','Hotel Creek') 
        cy.get('select[id="room_type"]').select('Double').should('have.value','Double') 
        cy.xpath("//input[@id='datepick_out']").clear()
        cy.xpath("//input[@id='datepick_out']").clear().type('19/06/2023')
        
        cy.xpath("//input[@id='Submit']").click()
        cy.xpath("//input[@id='radiobutton_0']").should('not.be.checked').check()
        cy.get('#continue').should('be.enabled').click()
        cy.get('#continue').should('not.be')
    })

}) 
