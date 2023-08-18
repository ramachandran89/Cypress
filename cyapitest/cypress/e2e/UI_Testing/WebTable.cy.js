describe('webtable Test', function () {
    // test case
    it('Scenario 1', function (){
       
       cy.visit("https://testautomationpractice.blogspot.com/")
       cy.xpath("//table[@name='BookTable']").contains('td','Selenium').should('be.visible')
       cy.scrollTo(0, 1000)
       cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($e,index,$list)=>{
         const text=$e.text()
         if(text.includes("Animesh")){
            cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bname){
               const BookName=bname.text()
               expect(BookName).to.equal("Learn JS")
            })
         }
       })
       
    })
 })