Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Demo', () => {
    it('site', () => {
         cy.visit('https://demoqa.com/upload-download')// visit URL
         cy.get("#downloadButton").click()
       })

    })