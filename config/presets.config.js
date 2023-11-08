/*
| Developed by Starton
| Filename : presets.config.js
*/

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {Pick<import('@docusaurus/types').Config, 'presets'>} */
export default {
	presets: [
		[
			'@docusaurus/preset-classic',
			/**@type {import('@docusaurus/preset-classic').Options} */
			{
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
					ignorePatterns: ['/tags/**'],
					filename: 'sitemap.xml',
				},
				blog: {
					showReadingTime: true,
				},
				docs: {
					sidebarPath: require.resolve('./sidebars.config'),
				},
				theme: {
					customCss: require.resolve('../src/css/starton.css'),
				},
				...(process.env.GTM_KEY && {
					googleTagManager: {
						containerId: process.env.GTM_KEY,
					},
				}),
			},
		],
	],
}
