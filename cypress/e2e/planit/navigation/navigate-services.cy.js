describe('Navigate Services', () => {
  // Navigate using end-user interactions
  // using the top-menu
  it('View Quality Engineering', () => {
    cy.visit('/');
    cy.get('span:contains("SOLUTIONS")')
      .parent()
      .should('exist')
      .invoke('mouseover')
      .then(() => {
        cy.get(
          'div#MegaMenuServicesId td > a[href="/au/services/quality-engineering"]'
        ).click({ force: true });
        cy.get('h1:contains("Quality Engineering")').should('exist');
      });
  });

  // Direct URL navigation
  it('View Testing & QA', () => {
    cy.visit('/services/testing-qa').then(() => {
      cy.get('h1:contains("Testing & QA")').should('exist');
    });
  });

  // Bypass drop-down menu and directly invoke
  // the click event from the DOM element
  it('View Test Automation', () => {
    cy.visit('/');
    cy.get('a:contains("Test Automation")').first().click({ force: true });
    cy.get('h1:contains("Test Automation")').should('exist');
  });
});
