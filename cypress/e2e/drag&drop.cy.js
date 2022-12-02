Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Demo', () => {
    //  beforeEach(() =>{
    it('site URL', () => {

        cy.visit('https://demo.automationtesting.in/Static.html')// visit URL
    })
    it('Symbol s', () => {
        cy.get(".col-xs-10>#angular").trigger('dragstart', {
        });
        //cy.get(".col-xs-4>#droparea").trigger('drop', {
        cy.get(".col-xs-4>#droparea").trigger('drop').trigger("dragend")
    });
    it('Drag and drop1', () => {

        cy.get('[id="mongo"]').trigger('dragstart', {

        });
        //cy.get(".col-xs-4 > #droparea").trigger('drop', {
        cy.get('[id="droparea"]').trigger("drop").trigger("dragend")
        //});
    })
        it('Drag and drop2', () => {

            cy.get('[id="node"]').trigger('dragstart', {
            });
            //cy.get(".col-xs-4 > #droparea").trigger('drop', {

            cy.get('[id="droparea"]').trigger("drop").trigger("dragend")
            //});
        })
    })
    //})
//})