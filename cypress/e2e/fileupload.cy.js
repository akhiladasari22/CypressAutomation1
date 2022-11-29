Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  describe('Demo', () => {
    it('site', () => {
     //cy.visit('https://demo.automationtesting.in/FileUpload.html')// visit URL
    cy.visit('https://fineuploader.com/demos.html')
    cy.get('#fine-uploader-gallery > .qq-uploader-selector > .qq-upload-button-selector > input').click({force: true})
     // cy.get('input[type =file]').click()
     //cy.get('#input-4').click()
      .attachFile("0% allocation.png")
      
      //cy.get('[type="submit"]').click()
    })
})