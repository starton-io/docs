/*
| Developed by Dirupt
| Filename : theme.config.js
*/

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
module.exports = {
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
					},
					{
						href: 'https://github.com/starton-io',
						label: 'GitHub',
						position: 'right',
					},
					{
						href: 'https://discord.starton.com',
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
					{
						title: 'Docs',
						items: [
							{
								label: 'Tutorial',
								to: '/docs/intro',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Discord',
								href: 'https://discord.starton.com',
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
								href: 'https://blog.starton.com/',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/starton-io',
							},
						],
					},
				],
			},

			// Prism
			// ----------------------------------------------------------------------------
			prism: {
				theme: require('prism-react-renderer/themes/dracula'),
			},

			copyright: `Copyright © ${new Date().getFullYear()} Starton Documentation, Inc. Built with Docusaurus.`,
		}),
}
