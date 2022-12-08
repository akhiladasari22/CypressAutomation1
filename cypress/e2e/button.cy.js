/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  describe('Access Website', () => {
        it('Launch sites',()=>{
      cy.visit('https://demoqa.com/buttons')// visting the url
      cy.title().should('eq','ToolsQA')// verifying the title
    })
  
        it('Double click button',()=>{
      cy.get('#doubleClickBtn').dblclick();// double cliking on that button
    })
    it('Right click button',()=>{
      cy.get('#rightClickBtn').rightclick();// rightcling on button
    })
    it(' click button',()=>{
  
      cy.xpath('//button[starts-with(text(),"Click Me")]').click()// normal click on button 
    })
  
  })