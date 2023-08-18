describe('test',function(){
    it('adactin', () => {
      cy.visit("https://adactinhotelapp.com/index.php")
      cy.get('header').parent()
    cy.log("Cash Denomination")
        let amt=2232
             while (amt >= 2000) {
			let r2000 = amt / 2000;
			amt = amt % 2000;
			cy.log("\nTotal Number Of 2000 Rupees Notes :" + r2000);
			break;
		}
        cy.log("value",amt)
    })

})