/*
| Developed by Starton
| Filename : docusaurus.config.js
*/

import 'dotenv/config'
import type { Config } from '@docusaurus/types'
import { commonConfig } from './config/common.config'
import { plugins } from './config/plugins.config'
import { presets } from './config/presets.config'
import { themeConfig } from './config/theme.config'

const config: Config = {
	// Common
	// ----------------------------------------------------------------------------
	...commonConfig,

	// Plugins
	// ----------------------------------------------------------------------------
	plugins,

	// Presets
	// ----------------------------------------------------------------------------
	presets,

	// Theme configuration
	// ----------------------------------------------------------------------------
	themeConfig,
}

export default config
