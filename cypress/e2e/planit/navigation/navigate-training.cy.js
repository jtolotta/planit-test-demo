describe("Navigate Training", () => {
  // Navigate to the ISTQB Foundation training page
  // and check the service menu scrolls correctly
  // using a custom command
  it("View ISTQB Foundation", () => {
    cy.visit("/training/istqb-foundation-certificate");
    
    // Dismiss the overlay if the site refreshes
    cy.get("body").click({ force: true });

    cy.get('h1:contains("ISTQB Foundation Certificate")').should("exist");
    cy.get('a:contains("Overview")').click();
    cy.get('h2:contains("Verify your testing skills with this essential accreditation!")').should("be.inViewport");
    cy.get('h2:contains("ISTQB Foundation Exam")').should("not.be.inViewport");
    cy.get('a:contains("Exam Details")')
      .click()
      .wait(3000)
      .then(() => {
        cy.get('h2:contains("ISTQB Foundation Exam")').should("be.inViewport");
      });
  });
});
