const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    env: {
      email: "kelompok13@gmail.com"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 4111,
    viewportHeight: 670,
    viewportWidth: 1100,
  },
});
