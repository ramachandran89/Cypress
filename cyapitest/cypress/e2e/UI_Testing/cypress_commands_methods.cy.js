/*What are the UI interaction commands provided by Cypress?
Click Command
Double Command
Right Click Command
Type Command
Clear Command
Check/UnCheck Command
Select Command
Trigger Command
What Cypress performs checks/Actions for each UI action?
*/
describe('demoqa',()=>{
//     it('cypress commands', () => {

//         cy.visit("https://demoqa.com/")
//         //cy.xpath("//div[@class='category-cards']//div[1]//div[1]//div[2]//*[name()='svg']").should('have.text', 'Elements')
//         cy.xpath("//div[@class='category-cards']//div[1]//div[1]//div[2]//*[name()='svg']").click();
//         cy.xpath("//div[@class='col-12 mt-4 col-md-6']").should('have.text','Please select an item from left to start practice.')
//         //cy.xpath("//span[text()='Text Box']").should('have.text','Text Box').click()
//         //cy.get('#userName').should('have.attr','input').type("ramachandran")
//         cy.get('#userName').type('Ramachandran')
//         cy.wait(5000)
//         //cy.get('input').invoke('attr', 'id').should('eq', 'userName')
//         cy.get('##userEmail').type('rama@gmail.com')
//         cy.wait(5000)
//         cy.xpath("//textarea[@id='currentAddress']").type('chennai')
//         cy.wait(5000)
//         cy.xpath("//textarea[@id='permanentAddress']").type('chennai')
//         cy.wait(5000)
//         // cy.get('#').type('')    

// })
it('cypress commands', () => {

    cy.visit("https://demoqa.com/text-box")  
    //cy.xpath("//input[@id='userName']").type('Ramachandran')   
    cy.get('#userName').type('Ramachandran')  
    
    // //cy.get('input').invoke('attr', 'id').should('eq', 'userName')
    // cy.get('##userEmail').type('rama@gmail.com')
  
    // cy.xpath("//textarea[@id='currentAddress']").type('chennai')
    
    // cy.xpath("//textarea[@id='permanentAddress']").type('chennai')
    // cy.wait(5000)
    // // cy.get('#').type('')    

})
})

     
    
    


