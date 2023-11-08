/*
| Developed by Starton
| Filename : plugins.config.js
*/

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {Pick<import('@docusaurus/types').Config, 'plugins'>} */
export default {
	plugins: [
		'@docusaurus/theme-live-codeblock',
		// Redirections plugin
		// Link : https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects
		// ----------------------------------------------------------------------------
		[
			'@docusaurus/plugin-client-redirects',
			{
				redirects: [
					{
						from: '/docs/Tutorials/Home',
						to: '/tutorials',
					},
					{
						from: '/intro',
						to: '/api-reference',
					},
					{
						from: '/docs/Smart-contract/ERC721-Meta.md',
						to: '/tutorials',
					},
				],
			},
		],
	],
}
