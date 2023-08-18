describe('hooks', () => {
    before(function () {
        cy.visit("https://adactinhotelapp.com/index.php")
    })

    beforeEach('login', () => {
        cy.fixture('adactin.json').then(function (testdata) {

            // cy.fixture('G:\VISUAL STUDIO CODE\CYPRESS_PROJECTS_2023\cyapitest\cypress\fixtures\adactin.json')
            // .then(data1){
            // cy.get('#username').type('ramaikkm02').should('have.value','ramaikkm02')
            // cy.get('#password').type('Rama1234').should('have.value','Rama1234')
            cy.get('#username').type(testdata.name)
            cy.get('#password').type(testdata.pwd)
            cy.get('#login').should('be.enabled').click()
            cy.wait(4000)
        })
    })
    it('adactin test success', () => {
        cy.log("Successfully logged in")
    })
    it.skip('adactin failure', () => {
        cy.log("failed")
    })
    // it('adactin function', () => {


    //     cy.get('select[id="location"]').select('Sydney').should('have.value', 'Sydney')
    //     cy.get('select[id="hotels"]').select('Hotel Creek').should('have.value', 'Hotel Creek')
    //     cy.get('select[id="room_type"]').select('Double').should('have.value', 'Double')
    //     cy.xpath("//input[@id='datepick_out']").clear()
    //     cy.xpath("//input[@id='datepick_out']").clear().type('19/06/2023')

    //     cy.xpath("//input[@id='Submit']").click()
    //     cy.xpath("//input[@id='radiobutton_0']").should('not.be.checked').check()
    //     cy.get('#continue').should('be.enabled').click()
    // })

    // })

})