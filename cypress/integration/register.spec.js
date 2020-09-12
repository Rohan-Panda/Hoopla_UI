describe("Testing Register user component", () => {
    it("Should have form with a button",()=>{
        cy.visit("http://localhost:3000/Register")
       // cy.wait(2000)
        cy.get('form').then((form)=>{
            cy.get(form).should('have.length',2)
            cy.get("button").then((button)=>{
                cy.get(button).should('have.length',1)
            })
           
            })
        })

    it("Should register user on entering correct values", () => {
        cy.visit("http://localhost:3000/Register").then(()=>{
        cy.get('input[name="uName"]').type("John")
        cy.get('input[name="uEmail"]').type("john@gmail.com")
        cy.get('input[name="uPass"]').type("John@1234")
        cy.get('input[name="uPhone"]').type("8265839081")
        cy.get('input[name="uDOB"]').type("1998-02-12")
        cy.get('form[id="regForm"]').submit().then(()=>{
        cy.url('eq',"http://localhost:3000/Register")
        })
    })

    })

    it("Should not register user as email already exist", () => {
        cy.visit("http://localhost:3000/Register").then(()=>{
            cy.get('input[name="uName"]').type("John")
            cy.get('input[name="uEmail"]').type("john@gmail.com")
            cy.get('input[name="uPass"]').type("John@1234")
            cy.get('input[name="uPhone"]').type("8265839081")
            cy.get('input[name="uDOB"]').type("1998-02-12")
            cy.get('form[id="regForm"]').submit().then(()=>{
        cy.get('div[class="text-danger"]').should('contain',"This email Id is already registered")
        })
    })

    })

    
    
})
