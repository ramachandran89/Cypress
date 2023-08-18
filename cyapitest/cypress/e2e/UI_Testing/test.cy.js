

//    
it('cypress commands', function() {

    cy.visit("https://demoqa.com/text-box")  
    //cy.xpath("//input[@id='userName']").type('Ramachandran')   
    cy.get('.mr-sm-2 form-control').type('Ramachandran')  
    
    // //cy.get('input').invoke('attr', 'id').should('eq', 'userName')
    // cy.get('##userEmail').type('rama@gmail.com')
  
    // cy.xpath("//textarea[@id='currentAddress']").type('chennai')
    
    // cy.xpath("//textarea[@id='permanentAddress']").type('chennai')
    // cy.wait(5000)
    // // cy.get('#').type('')    

})


     
    
    


