Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  describe('Demo', () => {
    it('site URL ', () => {
      cy.visit('http://192.168.11.50:3026/')
      cy.get('[class*="mat-form-field-wrapper"]').type('kalyan.penumutchu@senecaglobal.com')
      cy.contains("Log in").click()
      cy.contains("Program Manager").click()
      cy.get('.mat-list-item-content').eq(3).click()
      cy.get('.mat-list-item-content').eq(7).click()
      cy.get('[name="EmployeeId"]').click()
      //cy.get('#mat-option-3271>.mat-option-text').click()
      cy.get('#mat-option-131 > .mat-option-text').click()    
      //cy.contains('Select Associate').click().get('[id="mat-option-3271"]').click()
      cy.get('[name="ProjectId"]').click()
      cy.get("#mat-option-2881>.mat-option-text").click()
    })

})