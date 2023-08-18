class Login{    
    
    setUserName(name){
        //cy.visit("https://adactinhotelapp.com/index.php")
        //cy.get('#password').type('Rama1234').should('have.value','Rama1234')
        cy.get('#username').type(name)
        
    }
    setPassword(password){
        
        //cy.get('#password').type('Rama1234').should('have.value','Rama1234')
        //cy.get('#login').click()
        cy.get('#password').type(password)
    }
    clickLoginButton(){
        
        cy.get('#login').click()
    } 
    // verifyLogin(){
    //     cy.get('#username').type('ramaikkm02').should('have.value','ramaikkm02')
        
    // }
    
}
export default  Login;