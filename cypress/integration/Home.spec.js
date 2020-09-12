describe("Home Component",()=>{

     

it("should visit electronics component on clicking of electronics link",()=>{
    cy.visit("http://localhost:3000/dashboard")
    cy.get('#electronics').click().then(()=>{
      
            cy.visit("http://localhost:3000/electronics")
             })

})
it("should visit shoes component on clicking of electronics link",()=>{
    cy.visit("http://localhost:3000/dashboard")
    cy.get('#shoes').click().then(()=>{
      
            cy.visit("http://localhost:3000/shoes")
             })

})
it("should visit furniture component on clicking of electronics link",()=>{
    cy.visit("http://localhost:3000/dashboard")
    cy.get('#furniture').click().then(()=>{
      
            cy.visit("http://localhost:3000/furniture")
             })

})
it("should visit clothing component on clicking of electronics link",()=>{
    cy.visit("http://localhost:3000/dashboard")
    cy.get('#clothing').click().then(()=>{
      
            cy.visit("http://localhost:3000/clothing")
             })

})


})