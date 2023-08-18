context('Get Method',()=>{
it('Get Method',()=>{
   //cy.visit()
    cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
    .its('status')
    .should('equal',200)
})
it('POst method',()=>{
    cy.request({
        method: 'POST',
        url: "https://jsonplaceholder.typicode.com/posts/",
        
            body: {
                title: 'Test Post',
                body: 'This is post call',
                userId: 1
            }
       
    }).its('status').should('equal',201)
})
})