describe('empty spec', () => {
    it('passes', () => {
      cy.visit('https://demoqa.com/automation-practice-form')// visit URL
    })
     it('form', () => {
      cy.get('#firstName').type('Akhi').should('have.value','Akhi')  // enetring name
 cy.get('#lastName').type('Dasari').should('have.value','Dasari')// entering last name
 cy.get('#userEmail').type('Akhi@gmail.com').should('have.value','Akhi@gmail.com')  // enetring emails
  //handling radio buttons
  it('Interacting with radio button',()=>{
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click()
cy.get('#userNumber').type('9439834584').should('have.value','9439834584')
// cy.get('.react-datepicker__year-select').type('1999')
//  cy.get('.react-datepicker__month-select').type('May')
//  cy.get('.react-datepicker__week').type('20')
  })
  it('Interacting with checkbox',()=>{
    cy.get('.subjects-auto-complete__value-container').type('Maths{enter}')
  cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click()
  })
  it('addressdropdown selecting',()=>{
    cy.get('#currentAddress').type('Huzurabad')//.should('have.value','Huzurabad')
    cy.get("#state").click()
    cy.contains("div","NCR").click()
    cy.get("#city").click()
    cy.contains("Delhi{enter}")
        
  })
// cy.get('#dateOfBirthInput').click()
// //cy.get('#dateOfBirthInput').type(Cypress.moment().format('05, 20, 1999'))


  })
})