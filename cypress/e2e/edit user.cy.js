Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe("newUser", ()=> {


    
    beforeEach("get newUser", ()=> {
        cy.visit("http://localhost:1111/admin")
        cy.get('#email').type('rzagza039@gmail.com')
        cy.get('#password').type('**039##')
        cy.get('#loginForm').click()
        cy.get(':nth-child(7) > .nav-link').click()
        cy.get('.float-right > .btn').click() 
        
    })

    it('test id UN', ()=> {

        cy.get('#usersName').type('samir')
        cy.get('#userEmail').type('samir@gmail.com')
        cy.get('#userPassword').type('123456')
        cy.get('#userNewForm > :nth-child(4) > .form-control').type('123456')
        cy.get('#usersName').should('have.value','samir')
        cy.get('#btnUserAdd').click()
           
    })

    it('test id UN', ()=> {

        cy.get('#usersName').type('8')
        cy.get('#userEmail').type('samir@gmail.com')
        cy.get('#userPassword').type('123456')
        cy.get('#userNewForm > :nth-child(4) > .form-control').type('123456')
        cy.get('#usersName').should('not.include.value','8')
        cy.get('#btnUserAdd').click()
           
    })

    it('test id UN', ()=> {

        cy.get('#usersName').type('@')
        cy.get('#userEmail').type('samir@gmail.com')
        cy.get('#userPassword').type('123456')
        cy.get('#userNewForm > :nth-child(4) > .form-control').type('123456')
        cy.get('#usersName').should('not.have.value','@')
        cy.get('#btnUserAdd').click()
           
    })

    it('test id UN', ()=> {

        cy.get('#usersName').type('')
        cy.get('#userEmail').type('samir@gmail.com')
        cy.get('#userPassword').type('123456')
        cy.get('#userNewForm > :nth-child(4) > .form-control').type('123456')
        cy.get('#usersName').should('not.have.value','')
        cy.get('#btnUserAdd').click()
           
    })

    //===============================================

})