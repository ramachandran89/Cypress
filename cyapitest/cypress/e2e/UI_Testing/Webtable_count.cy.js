describe('webtable count', function () {
    // test case
    it('Scenario', function (){
       
       cy.visit("https://testautomationpractice.blogspot.com/")
       
       cy.scrollTo(0, 1000)
       
       
       cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($e,index,$list)=>{
         const text=$e.text()
         let v=1;
               console.log($list)
         //console.log("value of index"+index)
         //if(text.includes("Amit")){
         //    for(let i=0;i<=5;i++){
         //    if(text[i]=="Amit"){
         //        S++;
                
         //    //cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bname){
         //       //const BookName=bname.text()
         //       //expect(BookName).to.equal("Learn JS")
         //    //})
         // }}
         //console.log("Total"+S)
         for(let i=0;i<=index;i++){
            if(text==="Amit"){
            v++;
         console.log(text)}
         }
         
         
       })
       
    })
 })