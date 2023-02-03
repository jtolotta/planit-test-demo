describe('Search Single Result', () => {
  before(() => {
    cy.visit('/');
  });

  // Use search criteria that returns only a single result
  it('Search for The Rise of Autonomous Vehicles', () => {
    // Dismiss the overlay if the site refreshes
    cy.get('body').click({ force: true });
    cy.get('div[onclick="SearchBoxClick();"]').click();
    cy.get('div#dp-MegaSearch')
      .invoke('mouseout')
      .then(() => {
        cy.get('div[class="searchBox"] > input')
          .first()
          .type('The Rise of Autonomous Vehicles{enter}', { force: true });
        cy.get('a:contains("The Rise of Autonomous Vehicles")').should('exist');
        cy.get('div:contains("No more result were found.")').should('exist');
      });
  });
});
