describe('Login to OrangeHRM website', function () {
    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.fixture('testdata').then(function (testdata) {
            this.testdata = testdata
        })
    })

    it('Validate successful Login', function () {
        cy.xpath("//input[@placeholder='Username']").type(this.testdata.username)
        cy.xpath("//input[@placeholder='Password']").type(this.testdata.password)
        cy.xpath("//button[@type='submit']").click()
        // cy.get('#txtUsername').type(this.testdata.username)
        // cy.get('#txtPassword').type(this.testdata.password)
        //cy.get('#btnLogin').click()
        //y.get('#welcome').contains(this.testdata.welcomeText)
    })
})