import Login from "../e2e/LoginPOM.js";
describe('pom and class',()=>{
    it('login',()=>{
        //cy.fixture('adactin.json').then(function (testdata) {
        cy.visit("https://adactinhotelapp.com/index.php")
        const ln=new Login();
        ln.setUserName("ramaikkm02")
        ln.setPassword('Rama1234')
        ln.clickLoginButton();

    })
})
