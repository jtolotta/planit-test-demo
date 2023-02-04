import faker from '@faker-js/faker';

describe('Contact Form Valid', () => {
  beforeEach(() => {
    cy.visit('/contact');
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

  it('Check Contact Form Unicode Characters Submitted', () => {
    // Cyrillic
    cy.get('input[class*="FirstName"]').type(
      'Ё Ђ Ѓ Є Ѕ І Ї Ј Љ Њ Ћ Ќ Ў Џ А Б В Г Д Е Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ'
    );
    // Armenian
    cy.get('input[class*="LastName"]').type(
      'Ա Բ Գ Դ Ե Զ Է Ը Թ Ժ Ի Լ Խ Ծ Կ Հ Ձ Ղ Ճ Մ Յ Ն Շ Ո Չ Պ Ջ Ռ Ս Վ Տ Ր Ց Ւ Փ Ք Օ Ֆ'
    );
    // Arabic
    cy.get('input[class*="Organisation"]').type(
      '؛ ؟ ء آ أ ؤ إ ئ ا ب ة ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ـ ف ق ك ل '
    );
    //Bengali
    cy.get('input[class*="Email"]').type(
      'ই ঈ উ ঊ ঋ ঌ এ ঐ ও ঔ ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ঢ ণ@example.com'
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
    // Malayalam
    cy.get('textarea[class*=Enquiry]').type(`അ ആ ഇ ഈ ഉ ഊ ഋ ഌ എ ഏ ഐ ഒ ഓ ഔ
    ക ഖ ഗ ഘ ങ ച ഛ ജ ഝ ഞ ട ഠ ഡ ഢ ണ ത ഥ ദ ധ ന പ ഫ ബ ഭ മ യ ര റ ല
    ള ഴ വ ശ ഷ സ ഹ`);
    cy.get('input[type="submit"][value="Submit"]').click();
    cy.get('span:contains("Thanks for your interest.")').should('be.visible');
  });
});
