it('ftsting', () => {
    cy.visit("https://docs.cypress.io/api/commands/visit")
    // Step 1. Create an empty string that will host the new created string
    console.log("start")
    var str = "ramachandran123";
    var newString = "";

    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (var i = str.length - 1; i >= 0; i--) {
        newString=newString+str[i]; // or newString = newString + str[i];
    }
    console.log(newString)
    var input = prompt("Enter your name:");
    alert(input);
    
})