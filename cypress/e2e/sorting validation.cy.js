Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
//const { _ } = Cypress

describe('Access Website', () => {
    it('Launch sites', () => {
        let beforeSort = [];
        let afterSort = []
        let appSort = []


        cy.visit('https://www.bu.edu/tech/services/cccs/websites/www/wordpress/how-to/sortable-searchable-tables/')// To visit the url 
        cy.xpath('//table[1]//tr//td[1]').each(($ele, index) => {// selecting whole table data 
            // each is a callbackfunction Pass a function that is invoked value, index ..
            // .each will always yield the original array.
            const text = $ele.text();
            beforeSort[index] = text;
        }).then(() => {// to compare the value of a text .then() allows you to use the yielded subject in a callback function 
            //and should be used when you need to manipulate some values or do some actions.
            cy.log(beforeSort[0])
            afterSort = beforeSort.sort();
            cy.log(afterSort[1])
            cy.xpath("//table[1]//th[@class = 'header' and contains(text(), 'Athlete')]").click()
            cy.wait(2000)
            cy.xpath('//table[1]//tbody//tr//td[1]').each(($ele, index) => {
                const text = $ele.text();
                appSort[index] = text;
                if (index === 9) {
                    expect(appSort[5]).to.equal(afterSort[5])
                }
            })
        })


    })
})