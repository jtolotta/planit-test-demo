describe("Search Multiple Results", () => {
  before(() => {
    cy.visit("/");
  });

  // Use a search term that returns more than one result
  it("Search for Testing", () => {


    cy.get('input[name="s"]').first().click().type("Testing", { force: true });
    cy.get('button[title="Search"]').first().click();
    // Search result contains more than one search term
    cy.get('a:contains("Testing")').should('have.length.above', 1);
  });
});
