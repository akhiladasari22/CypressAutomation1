/// <reference types="cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('Different ways of using assertions and Keywords', () => {
  
    it('Assertions & Keywords type 1', () => {
  
      cy.visit('https://demoqa.com/dynamic-properties')// To visit the url 
// on the url we have kept 3 validation 
//1. In url included demoqa.com or not verifying
      cy.url().should('include','demoqa.com')
      //2. Url which is visited is matching here or not
      cy.url().should('eq', 'https://demoqa.com/dynamic-properties')
    // 3. URL contains the given text or not 
    cy.url().should('contain', 'dynamic-properties')
    
    })
    it('Assertions & Keywords type 2', () => {
// Instead of using mulitple cy.url command we write as below
    cy.url().should('include','demoqa.com')
    .should('eq', 'https://demoqa.com/dynamic-properties')
    .should('contain', 'dynamic-properties')
    })
    it('Assertions & Keywords type 3', () => {
    
    // insted of using should repeated times we can using and written below 
    cy.url().should('include','demoqa.com')
    .and('eq', 'https://demoqa.com/dynamic-properties')
    .and('contain', 'dynamic-properties')
    })
    it('Not an Assertions', () => {
       // not an assertion case how to handle showing below
cy.url().should('include','demoqa.com') // included in url or not
    .and('eq', 'https://demoqa.com/dynamic-properties')// mathed the url or not
    .and('not.contain', 'pop')// contains pop or not verified
    cy.title().should('include', 'ToolsQA')// verifying the title 
    .and('eq', 'ToolsQA')// title is matched or not verifying
    .and('contain', 'QA')// title contains qa or not verifying 
    cy.get('[href="https://demoqa.com"]').should('be.visible')// visible or not verified
    .and('exist')// exists or not 
    })
 })
