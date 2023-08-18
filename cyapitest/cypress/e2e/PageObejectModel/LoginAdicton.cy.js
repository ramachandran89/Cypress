import LoginPage from "./BaseClass.cy"  
const data=require('../../fixtures/adactin.json')
describe('login',()=>{
    it('loginss',()=>{
        cy.fixture('adactin.json').then((data)=>{
        const lg=new LoginPage()
        lg.visit()
        lg.enterUserName(data.name)
        lg.enterPassword(data.pwd)
        //lg.clickButton()
        })
    })
})