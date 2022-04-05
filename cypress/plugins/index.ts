/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const uuid = require('uuid');
const webpackPreprocessor = require('@cypress/webpack-batteries-included-preprocessor');
const runUuid = uuid.v4();

const processor = webpackPreprocessor({
    typescript: require.resolve('typescript'),
});

module.exports = (on: any, config: any) => {
    on('file:preprocessor', (file: any) => {
        file.outputPath = file.outputPath.replace(/^(.*\/)(.*?)(\..*)$/, `$1$2.${runUuid}$3`);
        return processor(file);
    });
};
