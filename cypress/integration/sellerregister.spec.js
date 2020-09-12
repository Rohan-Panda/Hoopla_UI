describe("Testing  seller Register component", () => {
    it("Should have form with a button",()=>{
        cy.visit("http://localhost:3000/rs")
       // cy.wait(2000)
        cy.get('form').then((form)=>{
            cy.get(form).should('have.length',2)
            cy.get("button").then((button)=>{
                cy.get(button).should('have.length',1)
            })
           
            })
        })


    it("Should register seller on entering valid data", () => {
        cy.visit("http://localhost:3000/rs").then(() => {
            cy.get('input[name="sEmail"]').type("sarfarazahmed85@gmail.com")
            cy.get('input[name="sPass"]').type("Shaik@123")
            cy.get('input[name="sName"]').type("Sarfaraz")
            cy.get('input[name="sTan"]').type("ABAB12345A")
            cy.get('input[name="sGST"]').type("12ABCDE4321A1Z1")
            cy.get('input[name="sAccount"]').type("919191919")
            cy.get('input[name="sPhone"]').type("7075413098")
            cy.get('form[id="SellerRegform"]').submit().then(() => {
                cy.url('eq', "http://localhost:3000/rs")
            })
        })
    })
    



})
