describe("Search Single Result", () => {
  before(() => {
    cy.visit("/");

    // Dismiss the overlay if the site refreshes
    cy.get("body").click({ force: true });
  });

  // Use search criteria that returns only a single result
  it("Search for The Rise of Autonomous Vehicles", () => {
    cy.get('input[name="s"]').first().click().type("The Rise of Autonomous Vehicles", { force: true });
    cy.get('button[title="Search"]').first().click();
    cy.get('h1:contains("The Rise of Autonomous Vehicles")').should("exist");
    cy.get('div:contains("It seems we can’t find what you’re looking for.")').should("exist");
  });
});
