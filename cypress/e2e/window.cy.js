Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('window', () => {
  it('passes', () => {
    cy.visit('https://demo.automationtesting.in/Windows.html')
  })
  it('Open New Tabbed Windows ',()=>{
    //cy.pause()
   // cy.contains('a','Open New Tabbed Windows ').click()
     //cy.get('[href="http://www.selenium.dev"]').click()
     //cy.pause()
  // //the number of milliseconds you want to continue to try finding the element
   cy.contains('button', 'click').eq(0).parent('a').invoke('attr', 'target').then(val=>{
    cy.origin("http://www.selenium.dev",()=>{
      cy.visit("http://www.selenium.dev")
    })
   })

    // cy.contains('button', 'click', { timeout: 10000 }).click()
  //  cy.get("a[href*='#Tabbed']").click()
    //cy.contains('button', 'click', { timeout: 10000 }).parent('a').invoke('removeAttr', 'target').click()
   // cy.get('[href="http://www.selenium.dev"]').click()
//cy.get('[href="http://www.selenium.dev"]').invoke('removeAttr', 'target').click()


  })
})
