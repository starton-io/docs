/*
| Developed by Starton
| Filename : docusaurus.config.js
*/

import 'dotenv/config'
import commonConfiguration from './config/common.config'
import i18nConfiguration from './config/i18n.config'
import pluginsConfiguration from './config/plugins.config'
import presetsConfiguration from './config/presets.config'
import themeConfiguration from './config/theme.config'

export default {
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
