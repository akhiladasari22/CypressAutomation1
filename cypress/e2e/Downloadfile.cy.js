Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Demo site', () => {
    it('Downloading file', () => {
         cy.visit('https://demoqa.com/upload-download')// visit URL
         cy.get("#downloadButton").click() //clicking on download button 
       })

    })