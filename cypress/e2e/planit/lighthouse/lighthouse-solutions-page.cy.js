describe('Lighthouse Solutions Page', () => {
  it('Run Solutions Page Report', () => {
    cy.visit('/au/solutions');

    const thresholds = {
      performance: 50,
      accessibility: 50,
      'best-practices': 70,
      seo: 70,
      'first-contentful-paint': 3000,
      'largest-contentful-paint': 5000,
      'cumulative-layout-shift': 0.1,
      'total-blocking-time': 500,
    };

    const options = {
      formFactor: 'desktop',
      screenEmulation: {
        mobile: false,
        disable: false,
        deviceScaleRatio: 1,
        height: 900,
        width: 1600,
      },
    };

    cy.lighthouse(thresholds, options);
  });
});
