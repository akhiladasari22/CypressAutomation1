Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  describe('Demo', () => {
    it('site URL', () => {
      cy.visit('https://demo.automationtesting.in/Frames.html')
      cy.contains('Single Iframe ').click()
      cy.get('[type="text"]').click()// visit URL
      cy.contains('Iframe with in an Iframe').click()
      cy.get()
    })
})