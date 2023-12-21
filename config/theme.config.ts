/*
| Developed by Starton
| Filename : theme.config.js
*/

import * as Prism from 'prism-react-renderer'
import type { ThemeConfig } from '@docusaurus/types'

export const themeConfig: ThemeConfig = {
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
				to: '/tutorials',
				label: 'Tutorials',
				'aria-label': 'Tutorials',
				position: 'left',
			},
			{
				label: 'API Reference',
				to: '/api-reference',
				'aria-label': 'API Reference',
				position: 'left',
			},
			// {
			// 	to: 'intro',
			// 	label: 'API',
			// 	'aria-label': 'API',
			// 	position: 'left',
			// },
			{
				to: 'guides',
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
			// {
			// 	href: 'https://auth.starton.com/login',
			// 	label: 'Login',
			// 	'aria-label': 'Login',
			// 	className: 'navbar__button',
			// 	position: 'right',
			// 	target: '_blank',
			// },
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
		theme: {
			plain: {
				color: '#F1F3F5',
				backgroundColor: '#161B1F',
			},
			styles: [
				{
					types: ['prolog', 'constant', 'builtin'],
					style: {
						color: '#01FEE2',
					},
				},
				{
					types: ['function'],
					style: {
						color: '#E5791A',
					},
				},
				{
					types: ['inserted'],
					style: {
						color: 'rgb(80, 250, 123)',
					},
				},
				{
					types: ['deleted'],
					style: {
						color: 'rgb(255, 85, 85)',
					},
				},
				{
					types: ['changed'],
					style: {
						color: 'rgb(255, 184, 108)',
					},
				},
				{
					types: ['punctuation', 'symbol'],
					style: {
						color: '#F1F3F5',
					},
				},
				{
					types: ['string', 'char', 'tag', 'selector'],
					style: {
						color: '#30B0FA',
					},
				},
				{
					types: ['keyword', 'variable'],
					style: {
						color: '#01FEE2',
						fontStyle: 'italic',
					},
				},
				{
					types: ['comment'],
					style: {
						color: '#8799AB',
					},
				},
				{
					types: ['attr-name'],
					style: {
						color: 'rgb(241, 250, 140)',
					},
				},
			],
		},
		additionalLanguages: ['bash', 'diff', 'json', 'jsx', 'tsx', 'typescript', 'yaml', 'solidity'],
	},
}
