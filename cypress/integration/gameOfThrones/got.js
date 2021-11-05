describe('GOT website functionality', () => {
    
    it('goes to correct route when character route is clicked. ', () => {
        cy.visit('/GOT/characters')
        cy.get('button').contains('Houses').click();
        cy.url().should('include', '/houses');
    })

    it('Search box should search by last name. ', () => {
        cy.visit('/GOT/characters')
        cy.get(`[aria-label ='search']`).click().type('Lannister').type('{enter}');
        cy.get('button').contains('Characters').click();
    })
})

