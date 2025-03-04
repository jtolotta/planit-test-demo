describe("Navigate Services", () => {
  // Navigate using end-user interactions
  // using the top-menu
  it("View Quality Engineering", () => {
    cy.visit("/");
    
    // Dismiss the overlay if the site refreshes
    cy.get("body").click({ force: true });

    cy.get('a:contains("Solutions")')
      .parent()
      .should("exist")
      .invoke("mouseover")
      .then(() => {
        cy.get('a[href="/services/quality-engineering/"]').first().click({ force: true });
        cy.get('h2:contains("Quality Engineering Services")').should("exist");
      });
  });

  // Direct URL navigation
  it("View QA & Testing", () => {
    cy.visit("/services/quality-assurance-testing").then(() => {
      cy.get('a[role="button"][aria-label="Close"]').click();
      cy.get('h2:contains("Quality Assurance & Testing")').should("exist");
    });
  });

  // Bypass drop-down menu and directly invoke
  // the click event from the DOM element
  it("View Test Automation", () => {
    cy.visit("/");
    cy.get('a[role="button"][aria-label="Close"]').click();
    cy.get('a:contains("Test Automation")').first().click({ force: true });
    cy.get('h2:contains("Test Automation Services")').should("exist");
  });
});
