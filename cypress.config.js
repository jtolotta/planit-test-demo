const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  pageLoadTimeout: 120000,
  waitForAnimations: true,
  watchForFileChanges: false,
  video: true,
  videoCompression: 32,
  videosFolder: 'cypress/videos',
  viewportWidth: 1600,
  viewportHeight: 900,
  e2e: {
    experimentalRunAllSpecs: true,
    baseUrl: 'https://www.planittesting.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
