describe("Intercept", () => {
    it('test', () => {
        cy.request('GET', "https://jsonplaceholder.typicode.com/posts/1") // (method-GET , URL)
            .its('status')
            .should('equal', 200);
    })
    it('test post', () => {

        cy.request({  
            method: 'POST',  
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: {
                title: 'Test Post',
                body: 'This is post call',
                userId: 1
            }
        })
            .its('status')
            .should('equal', 201);
    })
    it('PUT - Update', () => {

        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: 'Test Post-updated method in API',
                body: 'This is put call',
                userId: 1
            }
        })
            .its('status')
            .should('equal', 200);
    })
    it('Delete Method', () => {

        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1'            

        })
            .its('status')
            .should('equal', 200);
    })
    it('PUT - Update',() => {

        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: 'Test Post-updated method in API',
                body: 'This is put call',
                userId: 1
            }
        })
            .its('status')
            .should('equal', 200);
    })

    it('post method 2',()=>{
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                title:'new post method',
                body: 'This method is POST',
                userId: 1
            }

        }).its('status').should('equal',200);
    })
    

})