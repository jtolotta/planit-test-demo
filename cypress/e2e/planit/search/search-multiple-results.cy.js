describe('Search Multiple Results', () => {
  before(() => {
    cy.visit('/');
  });

  // Use a search term that returns more than one result
  // Load all results and check total
  it('Search for Regulatory Compliance', () => {
    // Dismiss the overlay if the site refreshes
    cy.get('body').click({ force: true });
    cy.get('div[onclick="SearchBoxClick();"]').click();
    cy.get('div#dp-MegaSearch')
      .invoke('mouseout')
      .then(() => {
        cy.get('div[class="searchBox"] > input')
          .first()
          .type('Regulatory Compliance', { force: true });
        cy.get('input[type="submit"][class*="searchIcon"]').click({
          force: true,
        });
        // At least one search result contains the search term
        cy.get('a:contains("Regulatory Compliance")').should('exist');

        cy.get('span[class*="searchLoadMoreInfo"]')
          .invoke('text')
          .then((text) => {
            const resultCount = parseInt(
              text.replace('Results Found.', '').trim()
            );

            // Determine the number of times to click
            // the load more button to view all results
            let loadCount = Math.floor(resultCount / 5);

            for (let i = 0; i < loadCount; i += 1) {
              cy.get('a:contains("Load More")').should('exist').click();
            }

            // Compare the actual total results with
            // the expected result value
            cy.get('ul#searchResult')
              .find('li')
              .should('have.length', resultCount);
          });
      });
  });
});
