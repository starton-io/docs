/*
| Developed by Starton
| Filename : common.config.js
*/

import type { Config } from '@docusaurus/types'

export const commonConfig: Omit<Config, 'plugins' | 'i18n' | 'presets' | 'themeConfig'> = {
	title: 'STARTON DOCUMENTATION',
	tagline: 'Turn any app into a blockchain app.',
	baseUrl: '/',
	url: process.env.URL,
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: '/img/logo.svg',
	staticDirectories: ['static'],

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'starton-io', // Usually your GitHub org/user name.
	projectName: 'starton-docs', // Usually your repo name.
}
