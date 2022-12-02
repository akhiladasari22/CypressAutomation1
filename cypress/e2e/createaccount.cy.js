Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Demo', () => {
    it('site', () => {
         cy.visit('https://demo.automationtesting.in/Register.html')// visit URL
       })
       it('Registration form',()=>{
        cy.get('[placeholder="First Name"]').type('Akhila').should('have.value','Akhi')//entering first name
        cy.get('[placeholder="Last Name"]').type('Dasari').should('have.value','Dasari')//last name entering
        cy.get('[ng-model="Adress"]').type('huzurabad')//.should('have.value','huzurabad')// enetering address
        cy.get('[ng-model="EmailAdress"]').type('akhi@gmail.com').should('have.value','akhi@gmail.com')//enetring email id
        cy.get('[ng-model="Phone"]').type('7878989898').should('have.value','7878989898')// mobile number entering
        

        cy.get('[value="FeMale"]').click()//selecting feamle radio button
       // cy.get('[value="Hockey"]').click()
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')//select checkbox hockey using check i verified
        cy.get('#checkbox3').uncheck().should('not.be.checked').and('have.value','Hockey')//unselect checkbox hockey using uncheck i verified
        cy.get('input[type="checkbox"]').check(['Hockey','Movies '])//checking multiple options
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click({force:true})
       // cy.get('.ui-corner-all').contains('Dutch').click({})
        //cy.get('#Skills').select('Analytics').should('have.value','Analytics')
        
       })
    })