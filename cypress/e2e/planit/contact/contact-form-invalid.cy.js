describe('Contact Form Invalid', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  it('Check for Empty Contact Field Submission', () => {
    cy.get('input[type="submit"][value="Submit"]').click();
    cy.get('span:contains("Please enter your first name")').should(
      'be.visible'
    );
    cy.get('span:contains("Please enter your last name")').should('be.visible');
    cy.get('span:contains("Please enter an Organisation Name")').should(
      'be.visible'
    );
    cy.get('span:contains("Please enter an email address")').should(
      'be.visible'
    );
    cy.get('span:contains("Please enter a phone number")').should('be.visible');
  });
});
