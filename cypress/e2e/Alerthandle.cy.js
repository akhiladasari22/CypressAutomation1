/////<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('Demo', () => {
  it('site', () => {
    cy.visit('https://demo.automationtesting.in/Alerts.html')// visit URL
  })
  it('Alertok', () => {
   //cy.get('#OKTab>[onclick="alertbox()"]')
   cy.get('#OKTab').click()
    cy.get('[onclick="alertbox()"]').click()
    cy.on('window:alert', (str) => {// used event (window:alert)
      expectt(str).to.contains('I am an alert box!');// for validating the message on window 
    })
  })
    it('Alert with Ok and Cancel', () => {
      cy.get("#CancelTab").click()
      cy.get('[onclick="confirmbox()"]').click()
      cy.on('window:confirm', (str)=>{// used event (window:alert)
      expect(str).to.equal('Press a Button!');
      })

    })
    it('Alert with Textbox', () => {
      cy.contains('a','Alert with Textbox ').click()
     // cy.get("#Textbox").click()
     //cy.get('[onclick="promptbox()"]').click()
   cy.window().then(($win)=>{
cy.stub($win, 'prompt').returns('Akhila')
// cy.contains('Please enter your name').click()
//       })
//       cy.get('#demo1').contains('hello')
cy.get('[onclick="promptbox()"]').click()
})
       })
    })

