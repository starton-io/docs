/*
| Developed by Dirupt
| Filename : common.config.js
*/

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
module.exports = {
	title: 'STARTON DOCUMENTATION',
	tagline: 'Turn any app into a blockchain app.',
	url: process.env.URL,
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/logo.svg',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'starton-io', // Usually your GitHub org/user name.
	projectName: 'starton-docs', // Usually your repo name.
}
