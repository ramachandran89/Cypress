class Login{    
    setUserName(name){
        
        cy.get('#password').type('Rama1234').should('have.value','Rama1234')
        
    }
    setPassword(password){
        
        cy.get('#password').type('Rama1234').should('have.value','Rama1234')
        cy.get('#login').click()
    }
    clickLoginButton(){
        
        cy.get('#login').click()
    }
    // verifyLogin(){
    //     cy.get('#username').type('ramaikkm02').should('have.value','ramaikkm02')
        
    // }
}