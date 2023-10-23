/*
| Developed by Dirupt
| Filename : theme.config.js
*/

const prisma = require('prism-react-renderer')

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
module.exports = {
	themeConfig:
		/**@type {import('@docusaurus/preset-classic').ThemeConfig}*/
		({
			// Plugins
			// ----------------------------------------------------------------------------
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

			liveCodeBlock: {
				/**
				 * La position du terrain de jeu en direct, au-dessus ou au-dessous de l'éditeur
				 * Valeurs possibles : "top" | "bottom"
				 */
				playgroundPosition: 'bottom',
			},

			// Theme
			// ----------------------------------------------------------------------------
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: true,
			},

			// Docs configurations
			// ----------------------------------------------------------------------------
			docs: {
				sidebar: {
					autoCollapseCategories: true,
				},
			},
			copyright: `Copyright © ${new Date().getFullYear()} Starton Documentation, Inc. Built with Docusaurus.`,

			// Navbar
			// ----------------------------------------------------------------------------
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
						'aria-label': 'Docs',
					},
					{
						label: 'Tutorials',
						href: '/tutorials',
						'aria-label': 'Tutorials',
						position: 'left',
					},
					{
						to: 'intro',
						label: 'API',
						'aria-label': 'API',
						position: 'left',
					},
					{
						to: 'blog/web3auth',
						label: 'Guides',
						'aria-label': 'Guides',
						position: 'right',
					},
					{
						type: 'doc',
						position: 'right',
						docId: 'release-notes',
						label: 'Release notes',
						'aria-label': 'Release notes',
					},
					{
						href: 'https://github.com/starton-io',
						// label: 'GitHub',
						'aria-label': 'GitHub',
						className: 'navbar__icon navbar__github',
						position: 'right',
					},
					{
						type: 'search',
						position: 'right',
					},
					{
						href: 'https://auth.starton.com/login',
						label: 'Login',
						'aria-label': 'Login',
						className: 'navbar__button',
						position: 'right',
						target: '_blank',
					},
					// {
					// 	type: 'docsVersionDropdown',
					// 	position: 'right',
					// 	dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }],
					// 	dropdownActiveClassDisabled: false,
					// },
				],
			},

			// Footer
			// ----------------------------------------------------------------------------
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
				theme: prisma.themes.dracula,
			},
		}),
}
