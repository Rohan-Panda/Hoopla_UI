describe("Testing login user component", () => {
    it("Should have form with two fields and button",()=>{
        cy.visit("http://localhost:3000/login")
        cy.wait(2000)
        cy.get('form').then((form)=>{
            cy.get(form).should('have.length',2)
            cy.get("button").then((button)=>{
                cy.get(button).should('have.length',1)
            })     
        })
    })

    it("Should login user on entering correct values", () => {
        cy.visit("http://localhost:3000/login").then(()=>{
            cy.get('input[name="email"]').type("john@gmail.com")
            cy.get('input[name="password"]').type("John@1234")
            cy.get('form[id="myForm"]').submit().then(()=>{
                cy.url('eq',"http://localhost:3000/dashboard")
            })
        })
    })

    it("Should not login an unregistered user", () => {
        cy.visit("http://localhost:3000/login").then(()=>{
            cy.get('input[name="email"]').type("jhaon@gmail.com")
            cy.get('input[name="password"]').type("QWer12#$")
            cy.get('form[id="myForm"]').submit(()=>{
                cy.on('window:alert','You are not registered.Please register to login')
            })
        })
    })

    it("Should not login user on entering wrong values", () => {
        cy.visit("http://localhost:3000/login").then(()=>{
            cy.get('input[name="email"]').type("john@gmail.com")
            cy.get('input[name="password"]').type("Jhaon@1234")
            cy.get('form[id="myForm"]').submit(()=>{
                cy.on('window:alert','The password entered is incorrect!!')
                // cy.get('div[class="text-danger"]').should('contain',"The password entered is incorrect!!")
            })
        })
    })    
})
