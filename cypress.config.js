import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",

    async setupNodeEvents(on, config) {
      // registra o plugin
      await addCucumberPreprocessorPlugin(on, config);

      // registra o esbuild corretamente
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },

    supportFile: "cypress/support/e2e.js",

    // onde ficam os steps
    stepDefinitions: "cypress/support/step_definitions/**/*.js",
  },
});
