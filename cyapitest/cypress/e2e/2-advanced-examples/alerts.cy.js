cy.on('window:alert',(t)=>{
    //assertions
    expect(t).to.contains('Your full name');
 })

 cy.on("window:confirm", (t))
 cy.on("window:alert")
 