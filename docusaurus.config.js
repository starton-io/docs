/*
| Developed by Dirupt
| Filename : docusaurus.config.js
*/

require('dotenv').config()
const commonConfiguration = require('./config/common.config')
const i18nConfiguration = require('./config/i18n.config')
const pluginsConfiguration = require('./config/plugins.config')
const presetsConfiguration = require('./config/presets.config')
const themeConfiguration = require('./config/theme.config')

/** @type {import('@docusaurus/types').Config} */
module.exports = {
	// Common
	// ----------------------------------------------------------------------------
	...commonConfiguration,

	// Internationalization
	// ----------------------------------------------------------------------------
	...i18nConfiguration,

	// Plugins
	// ----------------------------------------------------------------------------
	...pluginsConfiguration,

	// Presets
	// ----------------------------------------------------------------------------
	...presetsConfiguration,

	// Theme configuration
	// ----------------------------------------------------------------------------
	...themeConfiguration,
}
