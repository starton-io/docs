/*
| Developed by Dirupt
| Filename : presets.config.js
*/

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
module.exports = {
	presets: [
		[
			'classic',
			/**@type {import('@docusaurus/preset-classic').Options} */
			({
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
					ignorePatterns: ['/tags/**'],
					filename: 'sitemap.xml',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					//  editUrl:
					//    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				docs: {
					sidebarPath: require.resolve('./sidebars.config'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
				},
				theme: {
					customCss: require.resolve('../src/css/starton.css'),
				},
				...(process.env.GTM_KEY && {
					googleTagManager: {
						containerId: process.env.GTM_KEY,
					},
				}),
			}),
		],
		[
			'redocusaurus',
			/**@type {import('@docusaurus/preset-classic').Options} */
			{
				// Plugin Options for loading OpenAPI files
				specs: [
					{
						id: 'using-single-json',
						spec: 'openapiv3.yaml', //'https://api.starton.com/v3/relayer/docs-json'
						route: '/api/doc',
					},
				],
				theme: ['docusaurus-theme-redoc'],
			},
		],
	],
}
