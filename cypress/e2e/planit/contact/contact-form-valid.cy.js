import faker from '@faker-js/faker';

describe('Contact Form Valid', () => {
  before(() => {
    cy.visit('/au/contact');
  });

  it('Check Valid Contact Form Submitted', () => {
    cy.get('input[class*="FirstName"]').type(faker.name.firstName());
    cy.get('input[class*="LastName"]').type(faker.name.lastName());
    cy.get('input[class*="Organisation"]').type(faker.company.companyName());
    cy.get('input[class*="Email"]').type(
      faker.internet.domainWord() + '@example.com'
    );
    cy.get('input[class*="Phone"]').type(faker.phone.phoneNumber());
    cy.get('select[class*="AreaOfInterest "]').select(
      faker.random.arrayElement([
        'Consultancy & Services',
        'Training & Certification',
        'Tools & Solutions',
        'Other / General',
      ])
    );
    cy.get('textarea[class*=Enquiry]').type(faker.lorem.paragraph());
    cy.get('input[type="checkbox"]').click();
    cy.get('input[type="submit"][value="Submit"]').click();
    cy.get('span:contains("Thanks for your interest.")').should('be.visible');
  });
});
