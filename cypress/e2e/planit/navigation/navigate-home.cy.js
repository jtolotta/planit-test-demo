describe('Navigate Home', () => {
  // Check expected elements exist on page load
  it('Verify Home Page Loads', () => {
    cy.visit('/');
    cy.get('img[alt="planit"]').should('exist');
    cy.get('img[alt="Planit, an NRI company"').should('exist');
    cy.get('h1:contains("Accelerate Quality")').first().should('exist');
    cy.get('span:contains("SOLUTIONS")').should('exist');
    cy.get('a:contains("TRAINING")').should('exist');
    cy.get('a:contains("INSIGHTS")').should('exist');
    cy.get('a:contains("ABOUT")').should('exist');
    cy.get('a:contains("CAREERS")').should('exist');
    cy.get('a:contains("CONTACT")').should('exist');
    cy.get('a#searchAnchorId').should('exist');
    cy.get('a[href="/au/shop/booking"]').should('exist');
    cy.get('a#regionAnchorId').should('exist');
  });
});
