/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
const { _ } = Cypress

describe('Access Website', () => {

  it('Launch sites', () => {

    cy.visit('https://demoqa.com/webtables')// To visit the url 
  })

  it('sorting', () => {

    cy.contains('First Name').click()// sorting firstname column
    cy.contains('Last Name').click()// sorting last name column
    cy.contains('Email').click()// sorting email column
    cy.contains('Salary').click()//  salary column by clicking on header it is directly sorting
    cy.contains('Department').click()// sorting department column
    cy.xpath("//div[contains(text(),'Age')]").click()// sorting age 
    cy.get('.rt-td>.action-buttons>#edit-record-2').click()// For editing the record
    cy.get('#firstName').clear().type('Akhila')// clear the existing one & type what ever user enters
    cy.get('[placeholder="Last Name"]').clear().type('Dasari')//clear the existing one & type what ever user enters
    cy.get('#userEmail').clear().type('Akhi@gmail.com')// clear the existing one & type what ever user enters
    cy.get('[placeholder="Age"]').clear().type('20')// entering age if existing 1st clearing them.
cy.get('[placeholder="Salary"]').clear().type('200') //entering salary if existing 1st clearing them.
cy.get('#department').clear().type('QA')//entering department if existing 1st clearing them.
    cy.get('[type="submit"]').click()// submitting the entered data

getTableData('.rt-table') 
  return cy.get('.rt-table')
    .then(modal => cy.wrap(modal).find('table > tbody > tr'))
    .each(row =>
      cy
        .wrap(row)
        .find('td')
        .each(column => cy.wrap(column).invoke('text'))
  );
    

const expected = [
  ['Cierra', 'Cantrell', '45'],
  ['Alden', 'Vega', '39']
  ['Kierra', 'Gentry', '29']
];
cy.wrap(getTableData()).should("deep.eq", expected);
//getTableData().should('eq', expected);
})
})


    cy.get('.rt-td>.action-buttons>#delete-record-2').click()//for deleting the record
  
  //it('selecting rows and columns',()=>{

//   cy.get('.rt-table> .rt-tbody')// for selecting enter tabel
//     .each(($row, index, $rows) => {

//       cy.wrap($row).within(() => {

//         cy.get(".rt-td").each(($col, index, $cols) => {// selcting rows and columns in a table


//         })
//       })
//     })
// })
//})
//})