Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  describe('Demo', () => {
    it('site', () => {
      cy.visit('https://book.spicejet.com/')
    })
    it('click on signup link test',()=>{
//for mouse over written command for trigger
        cy.contains("Login / Signup").trigger('mouseover')
      
cy.get('#highlight-addons').trigger('mouseover')
})
  })