Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  describe('Demo', () => {
    it('site URL ', () => {
      cy.visit('http://192.168.11.50:4020/')
    })
    it('Navigation forward',()=>{
        cy.get('[data-placeholder="Enter your email.."]').type('kalyan.penumutchu@senecaglobal.com')
        cy.contains("Log in").click()
cy.go('back')
cy.go('forward')
})
  })