const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 4111,
    viewportHeight: 670,
    viewportWidth: 1100,
  },
});
