class LoginPage{
visit(){
    cy.visit("https://adactinhotelapp.com/")
}
enterUserName(names){
const name=cy.get('#username')
name.clear()
name.type(names)
return this
} 
enterPassword(pwds)   {
const pwd=cy.get('#password')
pwd.clear()
pwd.type(pwds)
return this
}
clickButton(){
const button=cy.get("#login")
button.click()
}
}
export default LoginPage