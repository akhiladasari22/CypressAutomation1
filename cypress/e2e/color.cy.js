/// <reference types="cypress" />

const Bluebird = require("cypress/types/bluebird");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('colour change', () => {
  
    it('Launch sites', () => {
  
      cy.visit('https://demoqa.com/dynamic-properties')// To visit the url 
    })
//     it('verifying color', () => {
//         // cy.get('#colorChange').should('colored', '#A52A2A')
        
//         // .and('be.colored', '#A52A2A')

//         cy.get('#colorChange')
//        ('{background-color:#0000ff;}')
//     })
 })