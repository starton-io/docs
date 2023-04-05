// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config()

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

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	// i18n: {
	// 	defaultLocale: 'en',
	// 	locales: ['en'],
	// },

	plugins: [
		'@docusaurus/theme-live-codeblock',
		...(process.env.SEGMENT_KEY && [
			[
				'docusaurus-plugin-segment',
				{
					apiKey: process.env.SEGMENT_KEY,
					// Add other options here.
				},
			],
		]),
	],

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
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
				},

				theme: {
					customCss: require.resolve('./src/css/starton.css'),
				},
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
						spec: 'openapiv3.yaml', //'https://api.starton.io/v3/relayer/docs-json'
						//route: '/docs/api/'
						route: '/api/doc',
					},
				],
				theme: ['docusaurus-theme-redoc'],
			},
		],
	],
	themeConfig:
		/**@type {import('@docusaurus/preset-classic').ThemeConfig}*/
		({
			algolia: {
				appId: 'KZLUI8PR4I',
				// Clé d'API publique : il est possible de la committer en toute sécurité
				apiKey: 'd3e664ca1fde19063cc976fec3575d37',
				indexName: 'starton',
				// Facultatif : paramètres de recherche de Algolia
				searchParameters: {},
				// Facultatif : chemin pour la page de recherche qui est activée par défaut (`false` pour le désactiver)
				searchPagePath: 'search',
			},
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: true,
			},
			docs: {
				sidebar: {
					autoCollapseCategories: true,
				},
			},

			navbar: {

				logo: {
					alt: 'Starton Logo',
					src: 'img/starton.svg',
				},
				items: [
					{
						type: 'doc',
						docId: 'overview',
						position: 'left',
						label: 'Docs',
					},
					{ to: 'intro', label: 'API', position: 'left' },
					{
						type: 'search',
						position: 'right',
					},
					{ to: 'blog/web3auth', label: 'Guides', position: 'right' },
					{
						type: 'doc',
						position: 'left',
						docId: 'Tutorials/Home',
						label: 'Tutorials',
					},
					{
                    type: 'doc',
                    position: 'right',
                    docId: 'release-notes',
                    label: 'Release notes',
                      					},{
						href: 'https://github.com/starton-io',
						label: 'GitHub',
						position: 'right',
					},
					{
						href: 'https://discord.starton.io',
						label: 'Support',
						position: 'right',
					},
					/*  {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: false,
          },*/
				],
			},
			liveCodeBlock: {
				/**
				 * La position du terrain de jeu en direct, au-dessus ou au-dessous de l'éditeur
				 * Valeurs possibles : "top" | "bottom"
				 */
				playgroundPosition: 'bottom',
			},
			footer: {
				style: 'dark',
				links: [
					/*  {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },*/
					{
						title: 'Community',
						items: [
							{
								label: 'Discord',
								href: 'https://discord.starton.io',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/starton_io',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								href: 'https://blog.starton.io/',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/starton-io',
							},
						],
					},
				],
			},

			copyright: `Copyright © ${new Date().getFullYear()} Starton Documentation, Inc. Built with Docusaurus.`,
			prism: {
				theme: require('prism-react-renderer/themes/dracula'),
			},
		}),
}
