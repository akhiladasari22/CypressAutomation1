/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
//const { _ } = Cypress
describe('Access Website', () => {
    it('Launch sites', () => {
       // cy.visit('https://codenboxautomationlab.com/')// To visit the url 
        cy.visit('http://192.168.11.50:3026/')
        cy.get('[data-placeholder="Enter your email.."]').type('kalyan.penumutchu@senecaglobal.com')// entering email id for login
         cy.contains("Log in").click()// clicking on login button 
         cy.contains("Program Manager").click()// clicking on PM role
    })
    it('scrolling', () => {
        cy.contains('Skills').scrollIntoView().should('be.visible')// scrolled the dtaa to view skills header then checked it is visible or not
        
    })
})
