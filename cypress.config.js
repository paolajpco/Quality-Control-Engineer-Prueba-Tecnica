const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.wingo.com",
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {},
  },
});
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
