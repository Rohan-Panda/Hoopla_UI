describe("Testing Seller Login Component", () => {
    it("Should have form with two fields and button",()=>{
        cy.visit("http://localhost:3000/SellerLogin")
       // cy.wait(2000)
        cy.get('form').then((form)=>{
            cy.get(form).should('have.length',2)
            cy.get("button").then((button)=>{
                cy.get(button).should('have.length',1)
            })
           
            })
        })

    it("Should login seller on entering valid credentials", () => {
        cy.visit("http://localhost:3000/SellerLogin").then(() => {
            cy.get('input[name="email"]').type("sarfarazahmed@gmail.com")
            cy.get('input[name="password"]').type("Shaik@123")
            cy.get('form[id="sellerForm"]').submit().then(() => {
                cy.url('eq', "http://localhost:3000/sellerCheck")
            })
        })
    })

    it("Should not login an unregistered seller", () => {
        cy.visit("http://localhost:3000/SellerLogin").then(() => {
            cy.get('input[name="email"]').type("jhon@gmail.com")
            cy.get('input[name="password"]').type("QWer12#$")
            cy.get('form[id="sellerForm"]').submit(()=>{
                cy.on('window:alert','You are not registered.Please register to login')
            })
        })
    })

    it("Should not login seller on entering wrong credentials", () => {
        cy.visit("http://localhost:3000/SellerLogin").then(() => {
            cy.get('input[name="email"]').type("vishi@gmail.com")
            cy.get('input[name="password"]').type("John@123")
            cy.get('form[id="sellerForm"]').submit(()=>{
                cy.on('window:alert','The password entered is incorrect!!')
            })
        })
    })
})