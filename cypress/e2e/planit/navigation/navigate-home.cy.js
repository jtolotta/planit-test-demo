describe("Navigate Home", () => {
  // Check expected elements exist on page load
  it("Verify Home Page Loads", () => {
    cy.visit("/");

    // Dismiss the overlay if the site refreshes
    cy.get("body").click({ force: true });

    cy.get('img[alt="Planit Logo"]').should("exist");
    cy.get('a:contains("Capabilities")').should("exist");
    cy.get('a:contains("Solutions")').should("exist");
    cy.get('a:contains("Training")').should("exist");
    cy.get('a:contains("Insight")').should("exist");
    cy.get('a:contains("Careers")').should("exist");
    cy.get('a:contains("About Us")').should("exist");
    cy.get('input[name="s"]').should("exist");
    cy.get('button[title="Search"]').should("exist");
  });
});
