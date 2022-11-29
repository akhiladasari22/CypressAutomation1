Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Demo', () => {
    //  beforeEach(() =>{
    it('site', () => {

        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')// visit URL
    })
//check value presence anywhere in the table
it('Table', ()=>{
//cy.get('table[id="customers"]').contains('td','Google')//.should('be.visible')
cy.get('#customers').contains('td','Google').should('be.visible')
})
//check the value present in specific row and column
it('specific row and column', ()=>{
    cy.get("#customers > tbody > tr:nth-child(2) > td:nth-child(3)").contains('Germany').should('be.visible')
    })
    //check the value present  based on the condition by iterating the row
    // verifying the company name Adobe whose country is "Canada"
    it('specific', ()=>{
        cy.get("#customers > tbody >tr:nth-child(6)> td:nth-child(3)").contains('Canada').should('be.visible')
        })
        // it('specific', ()=>{
        //     cy.get("#customers > tbody >tr td:nth-child())").contains('Canada').should('be.visible')
        //     })
   // })
})